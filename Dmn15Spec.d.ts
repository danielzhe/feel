export declare type UniqueNameIndex = Map<string, string>;
export declare const DMN15_SPEC: {
    namedElement: {
        isValidName: (id: string, name: string | undefined, allUniqueNames: UniqueNameIndex) => boolean;
    };
    expressionLanguage: {
        default: string;
    };
    typeLanguage: {
        default: string;
    };
    IMPORT: {
        name: {
            isValid: (id: string, name: string, allUniqueNames: UniqueNameIndex) => boolean;
        };
    };
    BOXED: {
        DECISION_TABLE: {
            PreferredOrientation: {
                default: string;
            };
            HitPolicy: {
                default: string;
            };
        };
        FUNCTION: {
            kind: {
                default: string;
            };
            JAVA: {
                classFieldName: string;
                methodSignatureFieldName: string;
            };
            PMML: {
                documentFieldName: string;
                modelFieldName: string;
            };
        };
    };
    ITEM_DEFINITIONS: {
        isCollection: {
            default: string;
        };
    };
    ANNOTATIONS: {
        format: {
            default: string;
        };
    };
    ASSOCIATIONS: {
        direction: {
            default: string;
        };
    };
    SHAPE: {
        isCollapsed: {
            default: string;
        };
    };
};
export declare const allDmnImportNamespaces: Set<string>;
export declare const KIE_DMN_UNKNOWN_NAMESPACE = "https://kie.org/dmn/unknown";
//# sourceMappingURL=Dmn15Spec.d.ts.map