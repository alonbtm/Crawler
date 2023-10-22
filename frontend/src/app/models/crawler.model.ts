export interface CrawlResult {
    url: string;
    content: string;
    depth: number;
    parent?: string;
    showLess?: boolean;
    expanded?: boolean;
}
  
export interface CrawlResponse {
parent: CrawlResult;
children: CrawlResult[];
}
  