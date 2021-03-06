// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a resource which customizes Cloudflare zone settings. Note that after destroying this resource Zone Settings will be reset to their initial values.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 * 
 * const test = new cloudflare.ZoneSettingsOverride("test", {
 *     name: var_cloudflare_zone,
 *     settings: {
 *         automaticHttpsRewrites: "on",
 *         brotli: "on",
 *         challengeTtl: 2700,
 *         minify: {
 *             css: "on",
 *             html: "off",
 *             js: "off",
 *         },
 *         mirage: "on",
 *         opportunisticEncryption: "on",
 *         securityHeader: {
 *             enabled: true,
 *         },
 *         securityLevel: "high",
 *         waf: "on",
 *     },
 * });
 * ```
 */
export class ZoneSettingsOverride extends pulumi.CustomResource {
    /**
     * Get an existing ZoneSettingsOverride resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneSettingsOverrideState, opts?: pulumi.CustomResourceOptions): ZoneSettingsOverride {
        return new ZoneSettingsOverride(name, <any>state, { ...opts, id: id });
    }

    /**
     * Settings present in the zone at the time the resource is created. This will be used to restore the original settings when this resource is destroyed. Shares the same schema as the `settings` attribute (Above).
     */
    public /*out*/ readonly initialSettings: pulumi.Output<{ alwaysOnline: string, alwaysUseHttps: string, automaticHttpsRewrites: string, brotli: string, browserCacheTtl: number, browserCheck: string, cacheLevel: string, challengeTtl: number, cnameFlattening: string, developmentMode: string, edgeCacheTtl: number, emailObfuscation: string, hotlinkProtection: string, http2: string, ipGeolocation: string, ipv6: string, maxUpload: number, minTlsVersion: string, minify: { css: string, html: string, js: string }, mirage: string, mobileRedirect: { mobileSubdomain: string, status: string, stripUri: boolean }, opportunisticEncryption: string, opportunisticOnion: string, originErrorPagePassThru: string, polish: string, prefetchPreload: string, privacyPass: string, pseudoIpv4: string, responseBuffering: string, rocketLoader: string, securityHeader: { enabled: boolean, includeSubdomains: boolean, maxAge: number, nosniff: boolean, preload: boolean }, securityLevel: string, serverSideExclude: string, sha1Support: string, sortQueryStringForCache: string, ssl: string, tls12Only: string, tls13: string, tlsClientAuth: string, trueClientIpHeader: string, waf: string, webp: string, websockets: string }>;
    public /*out*/ readonly initialSettingsReadAt: pulumi.Output<string>;
    /**
     * The DNS zone to which apply settings.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Which of the current `settings` are not able to be set by the user. Which settings these are is determined by plan level and user permissions.
     * * `zone_status`. A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup.
     * * `zone_type`. Status of the zone. Valid values: active, pending, initializing, moved, deleted, deactivated.
     */
    public /*out*/ readonly readonlySettings: pulumi.Output<string[]>;
    /**
     * Settings overrides that will be applied to the zone. If a setting is not specified the existing setting will be used. For a full list of available settings see below.
     */
    public readonly settings: pulumi.Output<{ alwaysOnline: string, alwaysUseHttps: string, automaticHttpsRewrites: string, brotli: string, browserCacheTtl: number, browserCheck: string, cacheLevel: string, challengeTtl: number, cnameFlattening: string, developmentMode: string, edgeCacheTtl: number, emailObfuscation: string, hotlinkProtection: string, http2: string, ipGeolocation: string, ipv6: string, maxUpload: number, minTlsVersion: string, minify: { css: string, html: string, js: string }, mirage: string, mobileRedirect: { mobileSubdomain: string, status: string, stripUri: boolean }, opportunisticEncryption: string, opportunisticOnion: string, originErrorPagePassThru: string, polish: string, prefetchPreload: string, privacyPass: string, pseudoIpv4: string, responseBuffering: string, rocketLoader: string, securityHeader: { enabled: boolean, includeSubdomains: boolean, maxAge: number, nosniff: boolean, preload: boolean }, securityLevel: string, serverSideExclude: string, sha1Support: string, sortQueryStringForCache: string, ssl: string, tls12Only: string, tls13: string, tlsClientAuth: string, trueClientIpHeader: string, waf: string, webp: string, websockets: string }>;
    public /*out*/ readonly zoneStatus: pulumi.Output<string>;
    public /*out*/ readonly zoneType: pulumi.Output<string>;

    /**
     * Create a ZoneSettingsOverride resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneSettingsOverrideArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZoneSettingsOverrideArgs | ZoneSettingsOverrideState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ZoneSettingsOverrideState = argsOrState as ZoneSettingsOverrideState | undefined;
            inputs["initialSettings"] = state ? state.initialSettings : undefined;
            inputs["initialSettingsReadAt"] = state ? state.initialSettingsReadAt : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["readonlySettings"] = state ? state.readonlySettings : undefined;
            inputs["settings"] = state ? state.settings : undefined;
            inputs["zoneStatus"] = state ? state.zoneStatus : undefined;
            inputs["zoneType"] = state ? state.zoneType : undefined;
        } else {
            const args = argsOrState as ZoneSettingsOverrideArgs | undefined;
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["settings"] = args ? args.settings : undefined;
            inputs["initialSettings"] = undefined /*out*/;
            inputs["initialSettingsReadAt"] = undefined /*out*/;
            inputs["readonlySettings"] = undefined /*out*/;
            inputs["zoneStatus"] = undefined /*out*/;
            inputs["zoneType"] = undefined /*out*/;
        }
        super("cloudflare:index/zoneSettingsOverride:ZoneSettingsOverride", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ZoneSettingsOverride resources.
 */
export interface ZoneSettingsOverrideState {
    /**
     * Settings present in the zone at the time the resource is created. This will be used to restore the original settings when this resource is destroyed. Shares the same schema as the `settings` attribute (Above).
     */
    readonly initialSettings?: pulumi.Input<{ alwaysOnline?: pulumi.Input<string>, alwaysUseHttps?: pulumi.Input<string>, automaticHttpsRewrites?: pulumi.Input<string>, brotli?: pulumi.Input<string>, browserCacheTtl?: pulumi.Input<number>, browserCheck?: pulumi.Input<string>, cacheLevel?: pulumi.Input<string>, challengeTtl?: pulumi.Input<number>, cnameFlattening?: pulumi.Input<string>, developmentMode?: pulumi.Input<string>, edgeCacheTtl?: pulumi.Input<number>, emailObfuscation?: pulumi.Input<string>, hotlinkProtection?: pulumi.Input<string>, http2?: pulumi.Input<string>, ipGeolocation?: pulumi.Input<string>, ipv6?: pulumi.Input<string>, maxUpload?: pulumi.Input<number>, minTlsVersion?: pulumi.Input<string>, minify?: pulumi.Input<{ css: pulumi.Input<string>, html: pulumi.Input<string>, js: pulumi.Input<string> }>, mirage?: pulumi.Input<string>, mobileRedirect?: pulumi.Input<{ mobileSubdomain: pulumi.Input<string>, status: pulumi.Input<string>, stripUri: pulumi.Input<boolean> }>, opportunisticEncryption?: pulumi.Input<string>, opportunisticOnion?: pulumi.Input<string>, originErrorPagePassThru?: pulumi.Input<string>, polish?: pulumi.Input<string>, prefetchPreload?: pulumi.Input<string>, privacyPass?: pulumi.Input<string>, pseudoIpv4?: pulumi.Input<string>, responseBuffering?: pulumi.Input<string>, rocketLoader?: pulumi.Input<string>, securityHeader?: pulumi.Input<{ enabled?: pulumi.Input<boolean>, includeSubdomains?: pulumi.Input<boolean>, maxAge?: pulumi.Input<number>, nosniff?: pulumi.Input<boolean>, preload?: pulumi.Input<boolean> }>, securityLevel?: pulumi.Input<string>, serverSideExclude?: pulumi.Input<string>, sha1Support?: pulumi.Input<string>, sortQueryStringForCache?: pulumi.Input<string>, ssl?: pulumi.Input<string>, tls12Only?: pulumi.Input<string>, tls13?: pulumi.Input<string>, tlsClientAuth?: pulumi.Input<string>, trueClientIpHeader?: pulumi.Input<string>, waf?: pulumi.Input<string>, webp?: pulumi.Input<string>, websockets?: pulumi.Input<string> }>;
    readonly initialSettingsReadAt?: pulumi.Input<string>;
    /**
     * The DNS zone to which apply settings.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Which of the current `settings` are not able to be set by the user. Which settings these are is determined by plan level and user permissions.
     * * `zone_status`. A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup.
     * * `zone_type`. Status of the zone. Valid values: active, pending, initializing, moved, deleted, deactivated.
     */
    readonly readonlySettings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Settings overrides that will be applied to the zone. If a setting is not specified the existing setting will be used. For a full list of available settings see below.
     */
    readonly settings?: pulumi.Input<{ alwaysOnline?: pulumi.Input<string>, alwaysUseHttps?: pulumi.Input<string>, automaticHttpsRewrites?: pulumi.Input<string>, brotli?: pulumi.Input<string>, browserCacheTtl?: pulumi.Input<number>, browserCheck?: pulumi.Input<string>, cacheLevel?: pulumi.Input<string>, challengeTtl?: pulumi.Input<number>, cnameFlattening?: pulumi.Input<string>, developmentMode?: pulumi.Input<string>, edgeCacheTtl?: pulumi.Input<number>, emailObfuscation?: pulumi.Input<string>, hotlinkProtection?: pulumi.Input<string>, http2?: pulumi.Input<string>, ipGeolocation?: pulumi.Input<string>, ipv6?: pulumi.Input<string>, maxUpload?: pulumi.Input<number>, minTlsVersion?: pulumi.Input<string>, minify?: pulumi.Input<{ css: pulumi.Input<string>, html: pulumi.Input<string>, js: pulumi.Input<string> }>, mirage?: pulumi.Input<string>, mobileRedirect?: pulumi.Input<{ mobileSubdomain: pulumi.Input<string>, status: pulumi.Input<string>, stripUri: pulumi.Input<boolean> }>, opportunisticEncryption?: pulumi.Input<string>, opportunisticOnion?: pulumi.Input<string>, originErrorPagePassThru?: pulumi.Input<string>, polish?: pulumi.Input<string>, prefetchPreload?: pulumi.Input<string>, privacyPass?: pulumi.Input<string>, pseudoIpv4?: pulumi.Input<string>, responseBuffering?: pulumi.Input<string>, rocketLoader?: pulumi.Input<string>, securityHeader?: pulumi.Input<{ enabled?: pulumi.Input<boolean>, includeSubdomains?: pulumi.Input<boolean>, maxAge?: pulumi.Input<number>, nosniff?: pulumi.Input<boolean>, preload?: pulumi.Input<boolean> }>, securityLevel?: pulumi.Input<string>, serverSideExclude?: pulumi.Input<string>, sha1Support?: pulumi.Input<string>, sortQueryStringForCache?: pulumi.Input<string>, ssl?: pulumi.Input<string>, tls12Only?: pulumi.Input<string>, tls13?: pulumi.Input<string>, tlsClientAuth?: pulumi.Input<string>, trueClientIpHeader?: pulumi.Input<string>, waf?: pulumi.Input<string>, webp?: pulumi.Input<string>, websockets?: pulumi.Input<string> }>;
    readonly zoneStatus?: pulumi.Input<string>;
    readonly zoneType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ZoneSettingsOverride resource.
 */
export interface ZoneSettingsOverrideArgs {
    /**
     * The DNS zone to which apply settings.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Settings overrides that will be applied to the zone. If a setting is not specified the existing setting will be used. For a full list of available settings see below.
     */
    readonly settings?: pulumi.Input<{ alwaysOnline?: pulumi.Input<string>, alwaysUseHttps?: pulumi.Input<string>, automaticHttpsRewrites?: pulumi.Input<string>, brotli?: pulumi.Input<string>, browserCacheTtl?: pulumi.Input<number>, browserCheck?: pulumi.Input<string>, cacheLevel?: pulumi.Input<string>, challengeTtl?: pulumi.Input<number>, cnameFlattening?: pulumi.Input<string>, developmentMode?: pulumi.Input<string>, edgeCacheTtl?: pulumi.Input<number>, emailObfuscation?: pulumi.Input<string>, hotlinkProtection?: pulumi.Input<string>, http2?: pulumi.Input<string>, ipGeolocation?: pulumi.Input<string>, ipv6?: pulumi.Input<string>, maxUpload?: pulumi.Input<number>, minTlsVersion?: pulumi.Input<string>, minify?: pulumi.Input<{ css: pulumi.Input<string>, html: pulumi.Input<string>, js: pulumi.Input<string> }>, mirage?: pulumi.Input<string>, mobileRedirect?: pulumi.Input<{ mobileSubdomain: pulumi.Input<string>, status: pulumi.Input<string>, stripUri: pulumi.Input<boolean> }>, opportunisticEncryption?: pulumi.Input<string>, opportunisticOnion?: pulumi.Input<string>, originErrorPagePassThru?: pulumi.Input<string>, polish?: pulumi.Input<string>, prefetchPreload?: pulumi.Input<string>, privacyPass?: pulumi.Input<string>, pseudoIpv4?: pulumi.Input<string>, responseBuffering?: pulumi.Input<string>, rocketLoader?: pulumi.Input<string>, securityHeader?: pulumi.Input<{ enabled?: pulumi.Input<boolean>, includeSubdomains?: pulumi.Input<boolean>, maxAge?: pulumi.Input<number>, nosniff?: pulumi.Input<boolean>, preload?: pulumi.Input<boolean> }>, securityLevel?: pulumi.Input<string>, serverSideExclude?: pulumi.Input<string>, sha1Support?: pulumi.Input<string>, sortQueryStringForCache?: pulumi.Input<string>, ssl?: pulumi.Input<string>, tls12Only?: pulumi.Input<string>, tls13?: pulumi.Input<string>, tlsClientAuth?: pulumi.Input<string>, trueClientIpHeader?: pulumi.Input<string>, waf?: pulumi.Input<string>, webp?: pulumi.Input<string>, websockets?: pulumi.Input<string> }>;
}
