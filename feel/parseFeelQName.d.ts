export declare type FeelQName = {
    type: "feel-qname";
    importName?: string;
    localPart: string;
};
export declare function parseFeelQName(qName: string): FeelQName;
export declare function buildFeelQName({ importName, localPart }: FeelQName): string;
//# sourceMappingURL=parseFeelQName.d.ts.map