export type QuotationInput = {
    FirstName: string;
    LastName: string;
    SourceAddress: string;
    TargetAddress: string;
    Email: string;
    Mobile: string;
    LivingSpace: number;
    BiArea: number;
    Pianos: boolean;
    RequireAssistance: boolean;
}

export class QuotationService {
    public async CalculatePrice(input: QuotationInput) {
        const result = fetch('http://moveitcaseapi.azurewebsites.net/api/Rate');
    }
}