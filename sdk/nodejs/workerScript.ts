// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Cloudflare worker script resource. In order for a script to be active, you'll also need to setup a `cloudflare_worker_route`.
 * 
 * ## Example Usage
 * 
 * __NOTE:__ This is for non-enterprise accounts where there is one script per zone. For enterprise accounts, see the "multi-script" example below.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 * import * as fs from "fs";
 * 
 * // Sets the script for the example.com zone
 * const myScript = new cloudflare.WorkerScript("my_script", {
 *     content: fs.readFileSync("script.js", "utf-8"),
 *     zone: "example.com",
 * });
 * ```
 * 
 * ## Multi-script example usage
 * 
 * __NOTE:__ This is only for enterprise accounts. With multi-script, each script is given a `name` instead of a `zone`
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 * import * as fs from "fs";
 * 
 * // Sets the script with the name "script_1"
 * const myScript = new cloudflare.WorkerScript("my_script", {
 *     content: fs.readFileSync("script.js", "utf-8"),
 *     name: "script_1",
 * });
 * ```
 */
export class WorkerScript extends pulumi.CustomResource {
    /**
     * Get an existing WorkerScript resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkerScriptState, opts?: pulumi.CustomResourceOptions): WorkerScript {
        return new WorkerScript(name, <any>state, { ...opts, id: id });
    }

    /**
     * The script content.
     */
    public readonly content: pulumi.Output<string>;
    /**
     * The name for the script. 
     */
    public readonly name: pulumi.Output<string | undefined>;
    /**
     * The zone for the script.
     */
    public readonly zone: pulumi.Output<string | undefined>;
    /**
     * The zone id of the script (only for non-multi-script resources)
     */
    public readonly zoneId: pulumi.Output<string>;

    /**
     * Create a WorkerScript resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkerScriptArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkerScriptArgs | WorkerScriptState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: WorkerScriptState = argsOrState as WorkerScriptState | undefined;
            inputs["content"] = state ? state.content : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["zone"] = state ? state.zone : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as WorkerScriptArgs | undefined;
            if (!args || args.content === undefined) {
                throw new Error("Missing required property 'content'");
            }
            inputs["content"] = args ? args.content : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["zone"] = args ? args.zone : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
        }
        super("cloudflare:index/workerScript:WorkerScript", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering WorkerScript resources.
 */
export interface WorkerScriptState {
    /**
     * The script content.
     */
    readonly content?: pulumi.Input<string>;
    /**
     * The name for the script. 
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The zone for the script.
     */
    readonly zone?: pulumi.Input<string>;
    /**
     * The zone id of the script (only for non-multi-script resources)
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WorkerScript resource.
 */
export interface WorkerScriptArgs {
    /**
     * The script content.
     */
    readonly content: pulumi.Input<string>;
    /**
     * The name for the script. 
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The zone for the script.
     */
    readonly zone?: pulumi.Input<string>;
    /**
     * The zone id of the script (only for non-multi-script resources)
     */
    readonly zoneId?: pulumi.Input<string>;
}