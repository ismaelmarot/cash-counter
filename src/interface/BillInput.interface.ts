export interface BillInputProps {
    denomination: number;
    quantity: string;
    onChange: (value: string) => void;
}