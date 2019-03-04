// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Cloudflare record resource.
type Record struct {
	s *pulumi.ResourceState
}

// NewRecord registers a new resource with the given unique name, arguments, and options.
func NewRecord(ctx *pulumi.Context,
	name string, args *RecordArgs, opts ...pulumi.ResourceOpt) (*Record, error) {
	if args == nil || args.Domain == nil {
		return nil, errors.New("missing required argument 'Domain'")
	}
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	if args == nil || args.Type == nil {
		return nil, errors.New("missing required argument 'Type'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["data"] = nil
		inputs["domain"] = nil
		inputs["name"] = nil
		inputs["priority"] = nil
		inputs["proxied"] = nil
		inputs["ttl"] = nil
		inputs["type"] = nil
		inputs["value"] = nil
	} else {
		inputs["data"] = args.Data
		inputs["domain"] = args.Domain
		inputs["name"] = args.Name
		inputs["priority"] = args.Priority
		inputs["proxied"] = args.Proxied
		inputs["ttl"] = args.Ttl
		inputs["type"] = args.Type
		inputs["value"] = args.Value
	}
	inputs["createdOn"] = nil
	inputs["hostname"] = nil
	inputs["metadata"] = nil
	inputs["modifiedOn"] = nil
	inputs["proxiable"] = nil
	inputs["zoneId"] = nil
	s, err := ctx.RegisterResource("cloudflare:index/record:Record", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Record{s: s}, nil
}

// GetRecord gets an existing Record resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRecord(ctx *pulumi.Context,
	name string, id pulumi.ID, state *RecordState, opts ...pulumi.ResourceOpt) (*Record, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["createdOn"] = state.CreatedOn
		inputs["data"] = state.Data
		inputs["domain"] = state.Domain
		inputs["hostname"] = state.Hostname
		inputs["metadata"] = state.Metadata
		inputs["modifiedOn"] = state.ModifiedOn
		inputs["name"] = state.Name
		inputs["priority"] = state.Priority
		inputs["proxiable"] = state.Proxiable
		inputs["proxied"] = state.Proxied
		inputs["ttl"] = state.Ttl
		inputs["type"] = state.Type
		inputs["value"] = state.Value
		inputs["zoneId"] = state.ZoneId
	}
	s, err := ctx.ReadResource("cloudflare:index/record:Record", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Record{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Record) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Record) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The RFC3339 timestamp of when the record was created
func (r *Record) CreatedOn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["createdOn"])
}

// Map of attributes that constitute the record value. Primarily used for LOC and SRV record types. Either this or `value` must be specified
func (r *Record) Data() *pulumi.Output {
	return r.s.State["data"]
}

// The DNS zone to add the record to
func (r *Record) Domain() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["domain"])
}

// The FQDN of the record
func (r *Record) Hostname() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["hostname"])
}

// A key-value map of string metadata cloudflare associates with the record
func (r *Record) Metadata() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["metadata"])
}

// The RFC3339 timestamp of when the record was last modified
func (r *Record) ModifiedOn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["modifiedOn"])
}

// The name of the record
func (r *Record) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The priority of the record
func (r *Record) Priority() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["priority"])
}

// Shows whether this record can be proxied, must be true if setting `proxied=true`
func (r *Record) Proxiable() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["proxiable"])
}

// Whether the record gets Cloudflare's origin protection; defaults to `false`.
func (r *Record) Proxied() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["proxied"])
}

// The TTL of the record ([automatic: '1'](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record))
func (r *Record) Ttl() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["ttl"])
}

// The type of the record
func (r *Record) Type() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["type"])
}

// The (string) value of the record. Either this or `data` must be specified
func (r *Record) Value() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["value"])
}

// The zone id of the record
func (r *Record) ZoneId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["zoneId"])
}

// Input properties used for looking up and filtering Record resources.
type RecordState struct {
	// The RFC3339 timestamp of when the record was created
	CreatedOn interface{}
	// Map of attributes that constitute the record value. Primarily used for LOC and SRV record types. Either this or `value` must be specified
	Data interface{}
	// The DNS zone to add the record to
	Domain interface{}
	// The FQDN of the record
	Hostname interface{}
	// A key-value map of string metadata cloudflare associates with the record
	Metadata interface{}
	// The RFC3339 timestamp of when the record was last modified
	ModifiedOn interface{}
	// The name of the record
	Name interface{}
	// The priority of the record
	Priority interface{}
	// Shows whether this record can be proxied, must be true if setting `proxied=true`
	Proxiable interface{}
	// Whether the record gets Cloudflare's origin protection; defaults to `false`.
	Proxied interface{}
	// The TTL of the record ([automatic: '1'](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record))
	Ttl interface{}
	// The type of the record
	Type interface{}
	// The (string) value of the record. Either this or `data` must be specified
	Value interface{}
	// The zone id of the record
	ZoneId interface{}
}

// The set of arguments for constructing a Record resource.
type RecordArgs struct {
	// Map of attributes that constitute the record value. Primarily used for LOC and SRV record types. Either this or `value` must be specified
	Data interface{}
	// The DNS zone to add the record to
	Domain interface{}
	// The name of the record
	Name interface{}
	// The priority of the record
	Priority interface{}
	// Whether the record gets Cloudflare's origin protection; defaults to `false`.
	Proxied interface{}
	// The TTL of the record ([automatic: '1'](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record))
	Ttl interface{}
	// The type of the record
	Type interface{}
	// The (string) value of the record. Either this or `data` must be specified
	Value interface{}
}