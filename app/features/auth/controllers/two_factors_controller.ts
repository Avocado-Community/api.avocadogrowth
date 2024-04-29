import twoFactorAuth from "@nulix/adonis-2fa/services/main";
import type { HttpContext} from "@adonisjs/core/http";

import { verifyOtpValidator} from "../validators/verify_otp.js";
import {DateTime} from "luxon";

export default class TwoFactorAuthController {
  async generate({ auth }: HttpContext) {

    const user = auth.user!

    user.twoFactorSecret = twoFactorAuth.generateSecret(user.email)

    await user.save()

    return user.twoFactorSecret
  }

  async disable({ auth, response}: HttpContext) {

    if (!auth.user!.hasEnalble2fa) {
      return response.badRequest({ message: '2FA is not enabled' })
    }

    await auth
      .user!.merge({ twoFactorSecret: null, twoFactorRecoveryCodes: null, twoFactorConfirmedAt: null })
      .save()

    return response.ok({ message: '2FA disabled' })
  }

  async verify({ auth, request, response }: HttpContext) {

    const { otp } = await request.validateUsing(verifyOtpValidator)

    const user = auth.user!


    const isValid = twoFactorAuth.verifyToken(
      user.twoFactorSecret?.secret,
      otp,
      user.twoFactorRecoveryCodes
    )
    if (!isValid) {
      return response.badRequest({ message: 'Invalid OTP' })
    }

    if (user!.hasEnalble2fa) {
      await user.merge({twoFactorConfirmedAt: DateTime.now()}).save()
    }

    return response.ok({ message: 'OTP valid' })

  }


  async generateRecoveryCodes({ auth, response }: HttpContext) {
    const user = auth.user!

    if (!user.hasEnalble2fa) {
      return response.badRequest({ message: '2FA is not enabled' })
    }

    const recoveryCodes = twoFactorAuth.generateRecoveryCodes()

    await user.merge({ twoFactorRecoveryCodes: recoveryCodes }).save()

    return {recovery_codes: recoveryCodes}
  }

}
