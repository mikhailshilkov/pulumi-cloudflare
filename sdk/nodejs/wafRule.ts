// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Cloudflare WAF rule resource for a particular zone. This can be used to configure firewall behaviour for pre-defined firewall rules.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 * 
 * const _100000 = new cloudflare.WafRule("100000", {
 *     mode: "simulate",
 *     ruleId: "100000",
 *     zone: "domain.com",
 * });
 * ```
 */
export class WafRule extends pulumi.CustomResource {
    /**
     * Get an existing WafRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WafRuleState, opts?: pulumi.CustomResourceOptions): WafRule {
        return new WafRule(name, <any>state, { ...opts, id: id });
    }

    /**
     * The mode of the rule, can be one of ["block", "challenge", "default", "disable", "simulate"].
     */
    public readonly mode: pulumi.Output<string>;
    /**
     * The ID of the WAF Rule Package that contains the rule.
     */
    public /*out*/ readonly packageId: pulumi.Output<string>;
    /**
     * The WAF Rule ID.
     */
    public readonly ruleId: pulumi.Output<string>;
    /**
     * The DNS zone to apply to.
     */
    public readonly zone: pulumi.Output<string>;
    /**
     * The DNS zone ID.
     */
    public /*out*/ readonly zoneId: pulumi.Output<string>;

    /**
     * Create a WafRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WafRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WafRuleArgs | WafRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: WafRuleState = argsOrState as WafRuleState | undefined;
            inputs["mode"] = state ? state.mode : undefined;
            inputs["packageId"] = state ? state.packageId : undefined;
            inputs["ruleId"] = state ? state.ruleId : undefined;
            inputs["zone"] = state ? state.zone : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as WafRuleArgs | undefined;
            if (!args || args.mode === undefined) {
                throw new Error("Missing required property 'mode'");
            }
            if (!args || args.ruleId === undefined) {
                throw new Error("Missing required property 'ruleId'");
            }
            if (!args || args.zone === undefined) {
                throw new Error("Missing required property 'zone'");
            }
            inputs["mode"] = args ? args.mode : undefined;
            inputs["ruleId"] = args ? args.ruleId : undefined;
            inputs["zone"] = args ? args.zone : undefined;
            inputs["packageId"] = undefined /*out*/;
            inputs["zoneId"] = undefined /*out*/;
        }
        super("cloudflare:index/wafRule:WafRule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering WafRule resources.
 */
export interface WafRuleState {
    /**
     * The mode of the rule, can be one of ["block", "challenge", "default", "disable", "simulate"].
     */
    readonly mode?: pulumi.Input<string>;
    /**
     * The ID of the WAF Rule Package that contains the rule.
     */
    readonly packageId?: pulumi.Input<string>;
    /**
     * The WAF Rule ID.
     */
    readonly ruleId?: pulumi.Input<string>;
    /**
     * The DNS zone to apply to.
     */
    readonly zone?: pulumi.Input<string>;
    /**
     * The DNS zone ID.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WafRule resource.
 */
export interface WafRuleArgs {
    /**
     * The mode of the rule, can be one of ["block", "challenge", "default", "disable", "simulate"].
     */
    readonly mode: pulumi.Input<string>;
    /**
     * The WAF Rule ID.
     */
    readonly ruleId: pulumi.Input<string>;
    /**
     * The DNS zone to apply to.
     */
    readonly zone: pulumi.Input<string>;
}