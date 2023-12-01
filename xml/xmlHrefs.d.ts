export declare function buildXmlHref({ namespace, id }: {
    namespace?: string;
    id: string;
}): string;
export declare type XmlHref = {
    namespace: string | undefined;
    id: string;
};
export declare function parseXmlHref(href: string): XmlHref;
//# sourceMappingURL=xmlHrefs.d.ts.map