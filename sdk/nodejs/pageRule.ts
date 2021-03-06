// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Cloudflare page rule resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 * 
 * // Add a page rule to the domain
 * const foobar = new cloudflare.PageRule("foobar", {
 *     actions: {
 *         emailObfuscation: "on",
 *         ssl: "flexible",
 *     },
 *     priority: 1,
 *     target: `sub.${var_cloudflare_zone}/page`,
 *     zone: var_cloudflare_zone,
 * });
 * ```
 */
export class PageRule extends pulumi.CustomResource {
    /**
     * Get an existing PageRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PageRuleState, opts?: pulumi.CustomResourceOptions): PageRule {
        return new PageRule(name, <any>state, { ...opts, id: id });
    }

    /**
     * The actions taken by the page rule, options given below.
     */
    public readonly actions: pulumi.Output<{ alwaysOnline?: string, alwaysUseHttps?: boolean, automaticHttpsRewrites?: string, browserCacheTtl?: number, browserCheck?: string, bypassCacheOnCookie?: string, cacheByDeviceType?: string, cacheDeceptionArmor?: string, cacheLevel?: string, cacheOnCookie?: string, disableApps?: boolean, disablePerformance?: boolean, disableRailgun?: boolean, disableSecurity?: boolean, edgeCacheTtl?: number, emailObfuscation?: string, explicitCacheControl?: string, forwardingUrl?: { statusCode: number, url: string }, hostHeaderOverride?: string, ipGeolocation?: string, mirage?: string, opportunisticEncryption?: string, originErrorPagePassThru?: string, polish?: string, resolveOverride?: string, respectStrongEtag?: string, responseBuffering?: string, rocketLoader?: string, securityLevel?: string, serverSideExclude?: string, sortQueryStringForCache?: string, ssl?: string, trueClientIpHeader?: string, waf?: string }>;
    /**
     * The priority of the page rule among others for this target, the higher the number the higher the priority as per [API documentation](https://api.cloudflare.com/#page-rules-for-a-zone-create-page-rule).
     */
    public readonly priority: pulumi.Output<number | undefined>;
    /**
     * Whether the page rule is active or disabled.
     */
    public readonly status: pulumi.Output<string | undefined>;
    /**
     * The URL pattern to target with the page rule.
     */
    public readonly target: pulumi.Output<string>;
    /**
     * The DNS zone to which the page rule should be added.
     */
    public readonly zone: pulumi.Output<string>;
    /**
     * The ID of the zone in which the page rule will be applied.
     */
    public /*out*/ readonly zoneId: pulumi.Output<string>;

    /**
     * Create a PageRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PageRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PageRuleArgs | PageRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PageRuleState = argsOrState as PageRuleState | undefined;
            inputs["actions"] = state ? state.actions : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["target"] = state ? state.target : undefined;
            inputs["zone"] = state ? state.zone : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as PageRuleArgs | undefined;
            if (!args || args.actions === undefined) {
                throw new Error("Missing required property 'actions'");
            }
            if (!args || args.target === undefined) {
                throw new Error("Missing required property 'target'");
            }
            if (!args || args.zone === undefined) {
                throw new Error("Missing required property 'zone'");
            }
            inputs["actions"] = args ? args.actions : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["status"] = args ? args.status : undefined;
            inputs["target"] = args ? args.target : undefined;
            inputs["zone"] = args ? args.zone : undefined;
            inputs["zoneId"] = undefined /*out*/;
        }
        super("cloudflare:index/pageRule:PageRule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PageRule resources.
 */
export interface PageRuleState {
    /**
     * The actions taken by the page rule, options given below.
     */
    readonly actions?: pulumi.Input<{ alwaysOnline?: pulumi.Input<string>, alwaysUseHttps?: pulumi.Input<boolean>, automaticHttpsRewrites?: pulumi.Input<string>, browserCacheTtl?: pulumi.Input<number>, browserCheck?: pulumi.Input<string>, bypassCacheOnCookie?: pulumi.Input<string>, cacheByDeviceType?: pulumi.Input<string>, cacheDeceptionArmor?: pulumi.Input<string>, cacheLevel?: pulumi.Input<string>, cacheOnCookie?: pulumi.Input<string>, disableApps?: pulumi.Input<boolean>, disablePerformance?: pulumi.Input<boolean>, disableRailgun?: pulumi.Input<boolean>, disableSecurity?: pulumi.Input<boolean>, edgeCacheTtl?: pulumi.Input<number>, emailObfuscation?: pulumi.Input<string>, explicitCacheControl?: pulumi.Input<string>, forwardingUrl?: pulumi.Input<{ statusCode: pulumi.Input<number>, url: pulumi.Input<string> }>, hostHeaderOverride?: pulumi.Input<string>, ipGeolocation?: pulumi.Input<string>, mirage?: pulumi.Input<string>, opportunisticEncryption?: pulumi.Input<string>, originErrorPagePassThru?: pulumi.Input<string>, polish?: pulumi.Input<string>, resolveOverride?: pulumi.Input<string>, respectStrongEtag?: pulumi.Input<string>, responseBuffering?: pulumi.Input<string>, rocketLoader?: pulumi.Input<string>, securityLevel?: pulumi.Input<string>, serverSideExclude?: pulumi.Input<string>, sortQueryStringForCache?: pulumi.Input<string>, ssl?: pulumi.Input<string>, trueClientIpHeader?: pulumi.Input<string>, waf?: pulumi.Input<string> }>;
    /**
     * The priority of the page rule among others for this target, the higher the number the higher the priority as per [API documentation](https://api.cloudflare.com/#page-rules-for-a-zone-create-page-rule).
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * Whether the page rule is active or disabled.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The URL pattern to target with the page rule.
     */
    readonly target?: pulumi.Input<string>;
    /**
     * The DNS zone to which the page rule should be added.
     */
    readonly zone?: pulumi.Input<string>;
    /**
     * The ID of the zone in which the page rule will be applied.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PageRule resource.
 */
export interface PageRuleArgs {
    /**
     * The actions taken by the page rule, options given below.
     */
    readonly actions: pulumi.Input<{ alwaysOnline?: pulumi.Input<string>, alwaysUseHttps?: pulumi.Input<boolean>, automaticHttpsRewrites?: pulumi.Input<string>, browserCacheTtl?: pulumi.Input<number>, browserCheck?: pulumi.Input<string>, bypassCacheOnCookie?: pulumi.Input<string>, cacheByDeviceType?: pulumi.Input<string>, cacheDeceptionArmor?: pulumi.Input<string>, cacheLevel?: pulumi.Input<string>, cacheOnCookie?: pulumi.Input<string>, disableApps?: pulumi.Input<boolean>, disablePerformance?: pulumi.Input<boolean>, disableRailgun?: pulumi.Input<boolean>, disableSecurity?: pulumi.Input<boolean>, edgeCacheTtl?: pulumi.Input<number>, emailObfuscation?: pulumi.Input<string>, explicitCacheControl?: pulumi.Input<string>, forwardingUrl?: pulumi.Input<{ statusCode: pulumi.Input<number>, url: pulumi.Input<string> }>, hostHeaderOverride?: pulumi.Input<string>, ipGeolocation?: pulumi.Input<string>, mirage?: pulumi.Input<string>, opportunisticEncryption?: pulumi.Input<string>, originErrorPagePassThru?: pulumi.Input<string>, polish?: pulumi.Input<string>, resolveOverride?: pulumi.Input<string>, respectStrongEtag?: pulumi.Input<string>, responseBuffering?: pulumi.Input<string>, rocketLoader?: pulumi.Input<string>, securityLevel?: pulumi.Input<string>, serverSideExclude?: pulumi.Input<string>, sortQueryStringForCache?: pulumi.Input<string>, ssl?: pulumi.Input<string>, trueClientIpHeader?: pulumi.Input<string>, waf?: pulumi.Input<string> }>;
    /**
     * The priority of the page rule among others for this target, the higher the number the higher the priority as per [API documentation](https://api.cloudflare.com/#page-rules-for-a-zone-create-page-rule).
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * Whether the page rule is active or disabled.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The URL pattern to target with the page rule.
     */
    readonly target: pulumi.Input<string>;
    /**
     * The DNS zone to which the page rule should be added.
     */
    readonly zone: pulumi.Input<string>;
}
