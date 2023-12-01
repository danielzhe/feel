import { meta as dmn15meta } from "@kie-tools/dmn-marshaller/dist/schemas/dmn-1_5/ts-gen/meta";
import { XmlParserTsIdRandomizer, XmlParserTsIdRandomizerMatcher } from "@kie-tools/xml-parser-ts/dist/idRandomizer";
export declare function getNewDmnIdRandomizer(): XmlParserTsIdRandomizer<{
    readonly DMN15__tDMNElement__extensionElements: {};
    readonly DMN15__tDMNElement: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tDMNElement__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonymous type...";
        };
    };
    readonly DMN15__tNamedElement__extensionElements: {};
    readonly DMN15__tNamedElement: {
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tNamedElement__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tDMNElementReference: {
        readonly "@_href": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElementReference";
            readonly xsdType: "xsd:anyURI";
        };
    };
    readonly DMN15__tDefinitions__extensionElements: {};
    readonly DMN15__tDefinitions: {
        readonly "@_expressionLanguage": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_typeLanguage": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_namespace": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_exporter": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "xsd:string";
        };
        readonly "@_exporterVersion": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "xsd:string";
        };
        readonly import: {
            readonly type: "DMN15__tImport";
            readonly isArray: true;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "// local type";
        };
        readonly itemDefinition: {
            readonly type: "DMN15__tItemDefinition";
            readonly isArray: true;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "// local type";
        };
        readonly drgElement: {
            readonly type: "DMN15__tDRGElement";
            readonly isArray: true;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "DMN15__tArtifact";
            readonly isArray: true;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "// local type";
        };
        readonly elementCollection: {
            readonly type: "DMN15__tElementCollection";
            readonly isArray: true;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "// local type";
        };
        readonly businessContextElement: {
            readonly type: "DMN15__tBusinessContextElement";
            readonly isArray: true;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "// local type";
        };
        readonly "dmndi:DMNDI": {
            readonly type: "DMNDI15__DMNDI";
            readonly isArray: false;
            readonly fromType: "DMN15__tDefinitions";
            readonly xsdType: "type found from namespace with declaration name 'dmndi'.";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tDefinitions__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tImport__extensionElements: {};
    readonly DMN15__tImport: {
        readonly "@_namespace": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tImport";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_locationURI": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tImport";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_importType": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tImport";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tImport__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tElementCollection__extensionElements: {};
    readonly DMN15__tElementCollection: {
        readonly drgElement: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tElementCollection";
            readonly xsdType: "// local type";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tElementCollection__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tDRGElement__extensionElements: {};
    readonly DMN15__tDRGElement: {
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tDRGElement__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tDecision__extensionElements: {};
    readonly DMN15__tDecision: {
        readonly question: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "xsd:string";
        };
        readonly allowedAnswers: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "xsd:string";
        };
        readonly variable: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: false;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly informationRequirement: {
            readonly type: "DMN15__tInformationRequirement";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly knowledgeRequirement: {
            readonly type: "DMN15__tKnowledgeRequirement";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly authorityRequirement: {
            readonly type: "DMN15__tAuthorityRequirement";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly supportedObjective: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly impactedPerformanceIndicator: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly decisionMaker: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly decisionOwner: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly usingProcess: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly usingTask: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly expression: {
            readonly type: "DMN15__tExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tDecision";
            readonly xsdType: "// local type";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tDecision__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tBusinessContextElement__extensionElements: {};
    readonly DMN15__tBusinessContextElement: {
        readonly "@_URI": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tBusinessContextElement";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tBusinessContextElement__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tPerformanceIndicator__extensionElements: {};
    readonly DMN15__tPerformanceIndicator: {
        readonly impactingDecision: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tPerformanceIndicator";
            readonly xsdType: "// local type";
        };
        readonly "@_URI": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tBusinessContextElement";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tPerformanceIndicator__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tOrganizationUnit__extensionElements: {};
    readonly DMN15__tOrganizationUnit: {
        readonly decisionMade: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tOrganizationUnit";
            readonly xsdType: "// local type";
        };
        readonly decisionOwned: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tOrganizationUnit";
            readonly xsdType: "// local type";
        };
        readonly "@_URI": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tBusinessContextElement";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tOrganizationUnit__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tInvocable__extensionElements: {};
    readonly DMN15__tInvocable: {
        readonly variable: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: false;
            readonly fromType: "DMN15__tInvocable";
            readonly xsdType: "// local type";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tInvocable__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tBusinessKnowledgeModel__extensionElements: {};
    readonly DMN15__tBusinessKnowledgeModel: {
        readonly encapsulatedLogic: {
            readonly type: "DMN15__tFunctionDefinition";
            readonly isArray: false;
            readonly fromType: "DMN15__tBusinessKnowledgeModel";
            readonly xsdType: "// local type";
        };
        readonly knowledgeRequirement: {
            readonly type: "DMN15__tKnowledgeRequirement";
            readonly isArray: true;
            readonly fromType: "DMN15__tBusinessKnowledgeModel";
            readonly xsdType: "// local type";
        };
        readonly authorityRequirement: {
            readonly type: "DMN15__tAuthorityRequirement";
            readonly isArray: true;
            readonly fromType: "DMN15__tBusinessKnowledgeModel";
            readonly xsdType: "// local type";
        };
        readonly variable: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: false;
            readonly fromType: "DMN15__tInvocable";
            readonly xsdType: "// local type";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tBusinessKnowledgeModel__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tInputData__extensionElements: {};
    readonly DMN15__tInputData: {
        readonly variable: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: false;
            readonly fromType: "DMN15__tInputData";
            readonly xsdType: "// local type";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tInputData__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tKnowledgeSource__extensionElements: {};
    readonly DMN15__tKnowledgeSource: {
        readonly "@_locationURI": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tKnowledgeSource";
            readonly xsdType: "xsd:anyURI";
        };
        readonly authorityRequirement: {
            readonly type: "DMN15__tAuthorityRequirement";
            readonly isArray: true;
            readonly fromType: "DMN15__tKnowledgeSource";
            readonly xsdType: "// local type";
        };
        readonly type: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tKnowledgeSource";
            readonly xsdType: "xsd:string";
        };
        readonly owner: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: false;
            readonly fromType: "DMN15__tKnowledgeSource";
            readonly xsdType: "// local type";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tKnowledgeSource__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tInformationRequirement__extensionElements: {};
    readonly DMN15__tInformationRequirement: {
        readonly requiredDecision: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: false;
            readonly fromType: "DMN15__tInformationRequirement";
            readonly xsdType: "// local type";
        };
        readonly requiredInput: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: false;
            readonly fromType: "DMN15__tInformationRequirement";
            readonly xsdType: "// local type";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tInformationRequirement__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tKnowledgeRequirement__extensionElements: {};
    readonly DMN15__tKnowledgeRequirement: {
        readonly requiredKnowledge: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: false;
            readonly fromType: "DMN15__tKnowledgeRequirement";
            readonly xsdType: "// local type";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tKnowledgeRequirement__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tAuthorityRequirement__extensionElements: {};
    readonly DMN15__tAuthorityRequirement: {
        readonly requiredDecision: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: false;
            readonly fromType: "DMN15__tAuthorityRequirement";
            readonly xsdType: "// local type";
        };
        readonly requiredInput: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: false;
            readonly fromType: "DMN15__tAuthorityRequirement";
            readonly xsdType: "// local type";
        };
        readonly requiredAuthority: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: false;
            readonly fromType: "DMN15__tAuthorityRequirement";
            readonly xsdType: "// local type";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tAuthorityRequirement__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tExpression__extensionElements: {};
    readonly DMN15__tExpression: {
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tExpression__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tItemDefinition__extensionElements: {};
    readonly DMN15__tItemDefinition: {
        readonly "@_typeLanguage": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tItemDefinition";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_isCollection": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DMN15__tItemDefinition";
            readonly xsdType: "xsd:boolean";
        };
        readonly itemComponent: {
            readonly type: "DMN15__tItemDefinition";
            readonly isArray: true;
            readonly fromType: "DMN15__tItemDefinition";
            readonly xsdType: "// local type";
        };
        readonly functionItem: {
            readonly type: "DMN15__tFunctionItem";
            readonly isArray: false;
            readonly fromType: "DMN15__tItemDefinition";
            readonly xsdType: "// local type";
        };
        readonly typeRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tItemDefinition";
            readonly xsdType: "xsd:string";
        };
        readonly allowedValues: {
            readonly type: "DMN15__tUnaryTests";
            readonly isArray: false;
            readonly fromType: "DMN15__tItemDefinition";
            readonly xsdType: "// local type";
        };
        readonly typeConstraint: {
            readonly type: "DMN15__tUnaryTests";
            readonly isArray: false;
            readonly fromType: "DMN15__tItemDefinition";
            readonly xsdType: "// local type";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tItemDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tFunctionItem__extensionElements: {};
    readonly DMN15__tFunctionItem: {
        readonly "@_outputTypeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tFunctionItem";
            readonly xsdType: "xsd:string";
        };
        readonly parameters: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: true;
            readonly fromType: "DMN15__tFunctionItem";
            readonly xsdType: "// local type";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tFunctionItem__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tLiteralExpression__extensionElements: {};
    readonly DMN15__tLiteralExpression: {
        readonly "@_expressionLanguage": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tLiteralExpression";
            readonly xsdType: "xsd:anyURI";
        };
        readonly text: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tLiteralExpression";
            readonly xsdType: "xsd:string";
        };
        readonly importedValues: {
            readonly type: "DMN15__tImportedValues";
            readonly isArray: false;
            readonly fromType: "DMN15__tLiteralExpression";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tLiteralExpression__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tInvocation__extensionElements: {};
    readonly DMN15__tInvocation: {
        readonly expression: {
            readonly type: "DMN15__tExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tInvocation";
            readonly xsdType: "// local type";
        };
        readonly binding: {
            readonly type: "DMN15__tBinding";
            readonly isArray: true;
            readonly fromType: "DMN15__tInvocation";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tInvocation__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tBinding: {
        readonly parameter: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: false;
            readonly fromType: "DMN15__tBinding";
            readonly xsdType: "// local type";
        };
        readonly expression: {
            readonly type: "DMN15__tExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tBinding";
            readonly xsdType: "// local type";
        };
    };
    readonly DMN15__tInformationItem__extensionElements: {};
    readonly DMN15__tInformationItem: {
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tInformationItem";
            readonly xsdType: "xsd:string";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tInformationItem__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tDecisionTable__extensionElements: {};
    readonly DMN15__tDecisionTable: {
        readonly "@_hitPolicy": {
            readonly type: "DMN15__tHitPolicy";
            readonly isArray: false;
            readonly fromType: "DMN15__tDecisionTable";
            readonly xsdType: "// local type";
        };
        readonly "@_aggregation": {
            readonly type: "DMN15__tBuiltinAggregator";
            readonly isArray: false;
            readonly fromType: "DMN15__tDecisionTable";
            readonly xsdType: "// local type";
        };
        readonly "@_preferredOrientation": {
            readonly type: "DMN15__tDecisionTableOrientation";
            readonly isArray: false;
            readonly fromType: "DMN15__tDecisionTable";
            readonly xsdType: "// local type";
        };
        readonly "@_outputLabel": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDecisionTable";
            readonly xsdType: "xsd:string";
        };
        readonly input: {
            readonly type: "DMN15__tInputClause";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionTable";
            readonly xsdType: "// local type";
        };
        readonly output: {
            readonly type: "DMN15__tOutputClause";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionTable";
            readonly xsdType: "// local type";
        };
        readonly annotation: {
            readonly type: "DMN15__tRuleAnnotationClause";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionTable";
            readonly xsdType: "// local type";
        };
        readonly rule: {
            readonly type: "DMN15__tDecisionRule";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionTable";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tDecisionTable__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tInputClause__extensionElements: {};
    readonly DMN15__tInputClause: {
        readonly inputExpression: {
            readonly type: "DMN15__tLiteralExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tInputClause";
            readonly xsdType: "// local type";
        };
        readonly inputValues: {
            readonly type: "DMN15__tUnaryTests";
            readonly isArray: false;
            readonly fromType: "DMN15__tInputClause";
            readonly xsdType: "// local type";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tInputClause__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tOutputClause__extensionElements: {};
    readonly DMN15__tOutputClause: {
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tOutputClause";
            readonly xsdType: "xsd:string";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tOutputClause";
            readonly xsdType: "xsd:string";
        };
        readonly outputValues: {
            readonly type: "DMN15__tUnaryTests";
            readonly isArray: false;
            readonly fromType: "DMN15__tOutputClause";
            readonly xsdType: "// local type";
        };
        readonly defaultOutputEntry: {
            readonly type: "DMN15__tLiteralExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tOutputClause";
            readonly xsdType: "// local type";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tOutputClause__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tRuleAnnotationClause: {
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tRuleAnnotationClause";
            readonly xsdType: "xsd:string";
        };
    };
    readonly DMN15__tDecisionRule__extensionElements: {};
    readonly DMN15__tDecisionRule: {
        readonly inputEntry: {
            readonly type: "DMN15__tUnaryTests";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionRule";
            readonly xsdType: "// local type";
        };
        readonly outputEntry: {
            readonly type: "DMN15__tLiteralExpression";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionRule";
            readonly xsdType: "// local type";
        };
        readonly annotationEntry: {
            readonly type: "DMN15__tRuleAnnotation";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionRule";
            readonly xsdType: "// local type";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tDecisionRule__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tRuleAnnotation: {
        readonly text: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tRuleAnnotation";
            readonly xsdType: "xsd:string";
        };
    };
    readonly DMN15__tImportedValues__extensionElements: {};
    readonly DMN15__tImportedValues: {
        readonly "@_expressionLanguage": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tImportedValues";
            readonly xsdType: "xsd:anyURI";
        };
        readonly importedElement: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tImportedValues";
            readonly xsdType: "xsd:string";
        };
        readonly "@_namespace": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tImport";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_locationURI": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tImport";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_importType": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tImport";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tImportedValues__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tArtifact__extensionElements: {};
    readonly DMN15__tArtifact: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tArtifact__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tGroup__extensionElements: {};
    readonly DMN15__tGroup: {
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tGroup";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tGroup__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tTextAnnotation__extensionElements: {};
    readonly DMN15__tTextAnnotation: {
        readonly "@_textFormat": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tTextAnnotation";
            readonly xsdType: "xsd:string";
        };
        readonly text: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tTextAnnotation";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tTextAnnotation__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tAssociation__extensionElements: {};
    readonly DMN15__tAssociation: {
        readonly "@_associationDirection": {
            readonly type: "DMN15__tAssociationDirection";
            readonly isArray: false;
            readonly fromType: "DMN15__tAssociation";
            readonly xsdType: "// local type";
        };
        readonly sourceRef: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: false;
            readonly fromType: "DMN15__tAssociation";
            readonly xsdType: "// local type";
        };
        readonly targetRef: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: false;
            readonly fromType: "DMN15__tAssociation";
            readonly xsdType: "// local type";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tAssociation__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tContext__extensionElements: {};
    readonly DMN15__tContext: {
        readonly contextEntry: {
            readonly type: "DMN15__tContextEntry";
            readonly isArray: true;
            readonly fromType: "DMN15__tContext";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tContext__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tContextEntry__extensionElements: {};
    readonly DMN15__tContextEntry: {
        readonly variable: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: false;
            readonly fromType: "DMN15__tContextEntry";
            readonly xsdType: "// local type";
        };
        readonly expression: {
            readonly type: "DMN15__tExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tContextEntry";
            readonly xsdType: "// local type";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tContextEntry__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tFunctionDefinition__extensionElements: {};
    readonly DMN15__tFunctionDefinition: {
        readonly "@_kind": {
            readonly type: "DMN15__tFunctionKind";
            readonly isArray: false;
            readonly fromType: "DMN15__tFunctionDefinition";
            readonly xsdType: "// local type";
        };
        readonly formalParameter: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: true;
            readonly fromType: "DMN15__tFunctionDefinition";
            readonly xsdType: "// local type";
        };
        readonly expression: {
            readonly type: "DMN15__tExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tFunctionDefinition";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tFunctionDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tRelation__extensionElements: {};
    readonly DMN15__tRelation: {
        readonly column: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: true;
            readonly fromType: "DMN15__tRelation";
            readonly xsdType: "// local type";
        };
        readonly row: {
            readonly type: "DMN15__tList";
            readonly isArray: true;
            readonly fromType: "DMN15__tRelation";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tRelation__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tList__extensionElements: {};
    readonly DMN15__tList: {
        readonly expression: {
            readonly type: "DMN15__tExpression";
            readonly isArray: true;
            readonly fromType: "DMN15__tList";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tList__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tUnaryTests__extensionElements: {};
    readonly DMN15__tUnaryTests: {
        readonly "@_expressionLanguage": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tUnaryTests";
            readonly xsdType: "xsd:anyURI";
        };
        readonly text: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tUnaryTests";
            readonly xsdType: "xsd:string";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tUnaryTests__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tDecisionService__extensionElements: {};
    readonly DMN15__tDecisionService: {
        readonly outputDecision: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionService";
            readonly xsdType: "// local type";
        };
        readonly encapsulatedDecision: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionService";
            readonly xsdType: "// local type";
        };
        readonly inputDecision: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionService";
            readonly xsdType: "// local type";
        };
        readonly inputData: {
            readonly type: "DMN15__tDMNElementReference";
            readonly isArray: true;
            readonly fromType: "DMN15__tDecisionService";
            readonly xsdType: "// local type";
        };
        readonly variable: {
            readonly type: "DMN15__tInformationItem";
            readonly isArray: false;
            readonly fromType: "DMN15__tInvocable";
            readonly xsdType: "// local type";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tNamedElement";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tDecisionService__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tChildExpression: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tChildExpression";
            readonly xsdType: "xsd:ID";
        };
        readonly expression: {
            readonly type: "DMN15__tExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tChildExpression";
            readonly xsdType: "// local type";
        };
    };
    readonly DMN15__tTypedChildExpression: {
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tTypedChildExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tChildExpression";
            readonly xsdType: "xsd:ID";
        };
        readonly expression: {
            readonly type: "DMN15__tExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tChildExpression";
            readonly xsdType: "// local type";
        };
    };
    readonly DMN15__tIterator__extensionElements: {};
    readonly DMN15__tIterator: {
        readonly "@_iteratorVariable": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tIterator";
            readonly xsdType: "xsd:string";
        };
        readonly in: {
            readonly type: "DMN15__tTypedChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tIterator";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tIterator__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tFor__extensionElements: {};
    readonly DMN15__tFor: {
        readonly return: {
            readonly type: "DMN15__tChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tFor";
            readonly xsdType: "// local type";
        };
        readonly "@_iteratorVariable": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tIterator";
            readonly xsdType: "xsd:string";
        };
        readonly in: {
            readonly type: "DMN15__tTypedChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tIterator";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tFor__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tQuantified__extensionElements: {};
    readonly DMN15__tQuantified: {
        readonly satisfies: {
            readonly type: "DMN15__tChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tQuantified";
            readonly xsdType: "// local type";
        };
        readonly "@_iteratorVariable": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tIterator";
            readonly xsdType: "xsd:string";
        };
        readonly in: {
            readonly type: "DMN15__tTypedChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tIterator";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tQuantified__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tConditional__extensionElements: {};
    readonly DMN15__tConditional: {
        readonly if: {
            readonly type: "DMN15__tChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tConditional";
            readonly xsdType: "// local type";
        };
        readonly then: {
            readonly type: "DMN15__tChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tConditional";
            readonly xsdType: "// local type";
        };
        readonly else: {
            readonly type: "DMN15__tChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tConditional";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tConditional__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMN15__tFilter__extensionElements: {};
    readonly DMN15__tFilter: {
        readonly in: {
            readonly type: "DMN15__tChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tFilter";
            readonly xsdType: "// local type";
        };
        readonly match: {
            readonly type: "DMN15__tChildExpression";
            readonly isArray: false;
            readonly fromType: "DMN15__tFilter";
            readonly xsdType: "// local type";
        };
        readonly "@_typeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tExpression";
            readonly xsdType: "xsd:string";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_label": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly description: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "xsd:string";
        };
        readonly extensionElements: {
            readonly type: "DMN15__tFilter__extensionElements";
            readonly isArray: false;
            readonly fromType: "DMN15__tDMNElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DMNDI15__DMNDI: {
        readonly "dmndi:DMNDiagram": {
            readonly type: "DMNDI15__DMNDiagram";
            readonly isArray: true;
            readonly fromType: "DMNDI15__DMNDI";
            readonly xsdType: "type found from namespace with declaration name 'dmndi'.";
        };
        readonly "dmndi:DMNStyle": {
            readonly type: "DMNDI15__DMNStyle";
            readonly isArray: true;
            readonly fromType: "DMNDI15__DMNDI";
            readonly xsdType: "type found from namespace with declaration name 'dmndi'.";
        };
    };
    readonly DMNDI15__DMNDiagram__extension: {};
    readonly DMNDI15__DMNDiagram: {
        readonly "@_useAlternativeInputDataShape": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNDiagram";
            readonly xsdType: "xsd:boolean";
        };
        readonly "dmndi:Size": {
            readonly type: "DC__Dimension";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNDiagram";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "dmndi:DMNDiagramElement": {
            readonly type: "DI__DiagramElement";
            readonly isArray: true;
            readonly fromType: "DMNDI15__DMNDiagram";
            readonly xsdType: "type found from namespace with declaration name 'di'.";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__Diagram";
            readonly xsdType: "xsd:string";
        };
        readonly "@_documentation": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__Diagram";
            readonly xsdType: "xsd:string";
        };
        readonly "@_resolution": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DI__Diagram";
            readonly xsdType: "xsd:double";
        };
        readonly "@_sharedStyle": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:IDREF";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "DMNDI15__DMNDiagram__extension";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "di:Style": {
            readonly type: "DI__Style";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "type found from namespace with declaration name 'di'.";
        };
    };
    readonly DMNDI15__DMNShape__extension: {};
    readonly DMNDI15__DMNShape: {
        readonly "@_dmnElementRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNShape";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isListedInputData": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNShape";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_isCollapsed": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNShape";
            readonly xsdType: "xsd:boolean";
        };
        readonly "dmndi:DMNLabel": {
            readonly type: "DMNDI15__DMNLabel";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNShape";
            readonly xsdType: "type found from namespace with declaration name 'dmndi'.";
        };
        readonly "dmndi:DMNDecisionServiceDividerLine": {
            readonly type: "DMNDI15__DMNDecisionServiceDividerLine";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNShape";
            readonly xsdType: "type found from namespace with declaration name 'dmndi'.";
        };
        readonly "dc:Bounds": {
            readonly type: "DC__Bounds";
            readonly isArray: false;
            readonly fromType: "DI__Shape";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "@_sharedStyle": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:IDREF";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "DMNDI15__DMNShape__extension";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "di:Style": {
            readonly type: "DI__Style";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "type found from namespace with declaration name 'di'.";
        };
    };
    readonly DMNDI15__DMNDecisionServiceDividerLine__extension: {};
    readonly DMNDI15__DMNDecisionServiceDividerLine: {
        readonly "di:waypoint": {
            readonly type: "DC__Point";
            readonly isArray: true;
            readonly fromType: "DI__Edge";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "@_sharedStyle": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:IDREF";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "DMNDI15__DMNDecisionServiceDividerLine__extension";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "di:Style": {
            readonly type: "DI__Style";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "type found from namespace with declaration name 'di'.";
        };
    };
    readonly DMNDI15__DMNEdge__extension: {};
    readonly DMNDI15__DMNEdge: {
        readonly "@_dmnElementRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNEdge";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_sourceElement": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNEdge";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_targetElement": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNEdge";
            readonly xsdType: "xsd:QName";
        };
        readonly "dmndi:DMNLabel": {
            readonly type: "DMNDI15__DMNLabel";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNEdge";
            readonly xsdType: "type found from namespace with declaration name 'dmndi'.";
        };
        readonly "di:waypoint": {
            readonly type: "DC__Point";
            readonly isArray: true;
            readonly fromType: "DI__Edge";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "@_sharedStyle": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:IDREF";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "DMNDI15__DMNEdge__extension";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "di:Style": {
            readonly type: "DI__Style";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "type found from namespace with declaration name 'di'.";
        };
    };
    readonly DMNDI15__DMNLabel__extension: {};
    readonly DMNDI15__DMNLabel: {
        readonly "dmndi:Text": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNLabel";
            readonly xsdType: "xsd:string";
        };
        readonly "dc:Bounds": {
            readonly type: "DC__Bounds";
            readonly isArray: false;
            readonly fromType: "DI__Shape";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "@_sharedStyle": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:IDREF";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "DMNDI15__DMNLabel__extension";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "di:Style": {
            readonly type: "DI__Style";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "type found from namespace with declaration name 'di'.";
        };
    };
    readonly DMNDI15__DMNStyle__extension: {};
    readonly DMNDI15__DMNStyle: {
        readonly "@_fontFamily": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "xsd:string";
        };
        readonly "@_fontSize": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "xsd:double";
        };
        readonly "@_fontItalic": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_fontBold": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_fontUnderline": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_fontStrikeThrough": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_labelHorizontalAlignement": {
            readonly type: "DC__AlignmentKind";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "@_labelVerticalAlignment": {
            readonly type: "DC__AlignmentKind";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "dmndi:FillColor": {
            readonly type: "DC__Color";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "dmndi:StrokeColor": {
            readonly type: "DC__Color";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "dmndi:FontColor": {
            readonly type: "DC__Color";
            readonly isArray: false;
            readonly fromType: "DMNDI15__DMNStyle";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__Style";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "DMNDI15__DMNStyle__extension";
            readonly isArray: false;
            readonly fromType: "DI__Style";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly DC__Color: {
        readonly "@_red": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "DC__Color";
            readonly xsdType: "xsd:int";
        };
        readonly "@_green": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "DC__Color";
            readonly xsdType: "xsd:int";
        };
        readonly "@_blue": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "DC__Color";
            readonly xsdType: "xsd:int";
        };
    };
    readonly DC__Point: {
        readonly "@_x": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Point";
            readonly xsdType: "xsd:double";
        };
        readonly "@_y": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Point";
            readonly xsdType: "xsd:double";
        };
    };
    readonly DC__Dimension: {
        readonly "@_width": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Dimension";
            readonly xsdType: "xsd:double";
        };
        readonly "@_height": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Dimension";
            readonly xsdType: "xsd:double";
        };
    };
    readonly DC__Bounds: {
        readonly "@_x": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Bounds";
            readonly xsdType: "xsd:double";
        };
        readonly "@_y": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Bounds";
            readonly xsdType: "xsd:double";
        };
        readonly "@_width": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Bounds";
            readonly xsdType: "xsd:double";
        };
        readonly "@_height": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Bounds";
            readonly xsdType: "xsd:double";
        };
    };
    readonly DI__DiagramElement__extension: {};
    readonly DI__Diagram__extension: {};
    readonly DI__Shape__extension: {};
    readonly DI__Edge__extension: {};
    readonly DI__Style__extension: {};
}>;
export declare const tDmnElementReferenceIdRandomizerMatcher: XmlParserTsIdRandomizerMatcher<typeof dmn15meta>;
//# sourceMappingURL=dmnIdRandomizer.d.ts.map