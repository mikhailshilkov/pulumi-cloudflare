# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class SpectrumApplication(pulumi.CustomResource):
    dns: pulumi.Output[dict]
    """
    The name and type of DNS record for the Spectrum application. Fields documented below.
    """
    ip_firewall: pulumi.Output[bool]
    """
    Enables the IP Firewall for this application. Defaults to `true`.
    """
    origin_directs: pulumi.Output[list]
    """
    A list of destination addresses to the origin. e.g. `tcp://192.0.2.1:22`.
    """
    origin_dns: pulumi.Output[dict]
    """
    A destination DNS addresses to the origin. Fields documented below.
    """
    origin_port: pulumi.Output[int]
    """
    If using `origin_dns` this is a required attribute. Origin port to proxy traffice to e.g. `22`.
    """
    protocol: pulumi.Output[str]
    """
    The port configuration at Cloudflare’s edge. e.g. `tcp/22`.
    """
    proxy_protocol: pulumi.Output[bool]
    """
    Enables Proxy Protocol v1 to the origin. Defaults to `false`.
    """
    tls: pulumi.Output[str]
    """
    TLS configuration option for Cloudflare to connect to your origin. Valid values are: `off`, `flexible`, `full` and `strict`. Defaults to `off`.
    """
    zone_id: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, dns=None, ip_firewall=None, origin_directs=None, origin_dns=None, origin_port=None, protocol=None, proxy_protocol=None, tls=None, zone_id=None, __name__=None, __opts__=None):
        """
        Provides a Cloudflare Spectrum Application. You can extend the power of Cloudflare's DDoS, TLS, and IP Firewall to your other TCP-based services.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] dns: The name and type of DNS record for the Spectrum application. Fields documented below.
        :param pulumi.Input[bool] ip_firewall: Enables the IP Firewall for this application. Defaults to `true`.
        :param pulumi.Input[list] origin_directs: A list of destination addresses to the origin. e.g. `tcp://192.0.2.1:22`.
        :param pulumi.Input[dict] origin_dns: A destination DNS addresses to the origin. Fields documented below.
        :param pulumi.Input[int] origin_port: If using `origin_dns` this is a required attribute. Origin port to proxy traffice to e.g. `22`.
        :param pulumi.Input[str] protocol: The port configuration at Cloudflare’s edge. e.g. `tcp/22`.
        :param pulumi.Input[bool] proxy_protocol: Enables Proxy Protocol v1 to the origin. Defaults to `false`.
        :param pulumi.Input[str] tls: TLS configuration option for Cloudflare to connect to your origin. Valid values are: `off`, `flexible`, `full` and `strict`. Defaults to `off`.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if dns is None:
            raise TypeError('Missing required property dns')
        __props__['dns'] = dns

        __props__['ip_firewall'] = ip_firewall

        __props__['origin_directs'] = origin_directs

        __props__['origin_dns'] = origin_dns

        if origin_port is None:
            raise TypeError('Missing required property origin_port')
        __props__['origin_port'] = origin_port

        if protocol is None:
            raise TypeError('Missing required property protocol')
        __props__['protocol'] = protocol

        __props__['proxy_protocol'] = proxy_protocol

        __props__['tls'] = tls

        if zone_id is None:
            raise TypeError('Missing required property zone_id')
        __props__['zone_id'] = zone_id

        super(SpectrumApplication, __self__).__init__(
            'cloudflare:index/spectrumApplication:SpectrumApplication',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
