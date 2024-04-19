import env from '#start/env'
import { authApiClient } from '@adonisjs/auth/plugins/api_client'
import { sessionApiClient } from '@adonisjs/session/plugins/api_client'
import app from '@adonisjs/core/services/app'
import testUtils from '@adonisjs/core/services/test_utils'
import { apiClient } from '@japa/api-client'
import { assert } from '@japa/assert'
import { pluginAdonisJS } from '@japa/plugin-adonisjs'
import {authApiClient}  from "@adonisjs/auth/plugins/api_client";
import type { Config } from '@japa/runner/types'
import {sessionApiClient} from "@adonisjs/session/plugins/api_client";

/**
 * This file is imported by the "bin/test.ts" entrypoint file
 */

/**
 * Configure Japa plugins in the plugins array.
 * Learn more - https://japa.dev/docs/runner-config#plugins-optional
 */
export const plugins: Config['plugins'] = [
  assert(),
  apiClient({
    baseURL: `http://${env.get('HOST')}:${env.get('PORT')}`,
  }),
  authApiClient(app),
  sessionApiClient(app),
  pluginAdonisJS(app),
  sessionApiClient(app),
  authApiClient(app),
]

/**
 * Configure lifecycle function to run before and after all the
 * tests.
 *
 * The setup functions are executed before all the tests
 * The teardown functions are executer after all the tests
 */
export const runnerHooks: Required<Pick<Config, 'setup' | 'teardown'>> = {
  setup: [
    () => {
      console.log('running before all the tests')
    },
  ],
  teardown: [
    () => {
      console.log('running after all the tests')
    },
  ],
}

/**
 * Configure suites by tapping into the test suite instance.
 * Learn more - https://japa.dev/docs/test-suites#lifecycle-hooks
 */
export const configureSuite: Config['configureSuite'] = (suite) => {
  if (suite.name === 'functional') {
    return suite.setup(() => testUtils.httpServer().start())
  }
}
