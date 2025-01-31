import DependencyContainer from "./types/dependency-container";
import Provider from "./providers/provider";
import InjectionToken, { TokenDescriptor } from "./providers/injection-token";
import RegistrationOptions from "./types/registration-options";
export declare type Registration<T = any> = {
    provider: Provider<T>;
    options: RegistrationOptions;
    instance?: T;
};
export declare type ParamInfo = TokenDescriptor | InjectionToken<any>;
export declare const instance: DependencyContainer;
export default instance;
