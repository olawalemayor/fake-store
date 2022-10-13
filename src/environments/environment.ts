// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://fakestoreapi.com',

  // Flutterwave
  flutterAPIUrl: 'https://api.flutterwave.com/v3',
  flutterSecretKey: 'FLWSECK_TEST-9c44d346d961c9e858a634822100717e-X',

  // Paystack
  paystackApiUrl: 'https://api.paystack.co',
  paystackPrivateKey: 'sk_test_8f26f0e5ac36a42429d7fe935c76528c44093ae1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
