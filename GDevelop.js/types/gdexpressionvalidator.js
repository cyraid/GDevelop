// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdExpressionValidator extends gdExpressionParser2NodeWorker {
  constructor(platform: gdPlatform, projectScopedContainers: gdProjectScopedContainers, rootType: string, extraInfo: string): void;
  getAllErrors(): gdVectorExpressionParserError;
  getFatalErrors(): gdVectorExpressionParserError;
  delete(): void;
  ptr: number;
};