import { ReplaySubject } from 'rxjs';
import { AppProps } from 'single-spa';
declare var __POWERED_BY_QIANKUN__: any;
declare var __webpack_public_path__: any;
declare var __INJECTED_PUBLIC_PATH_BY_QIANKUN__: any;
if (__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = __INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
export const singleSpaPropsSubject = new ReplaySubject<SingleSpaProps>(1);

// Add any custom single-spa props you have to this type def
// https://single-spa.js.org/docs/building-applications.html#custom-props
export type SingleSpaProps = AppProps & {};
