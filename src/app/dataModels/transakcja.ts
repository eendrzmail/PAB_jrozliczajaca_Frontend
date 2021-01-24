export interface Transakcja {
    id_transakcji:     number;
    numer_transakcji:  string;
    typ_operacji:      number;
    data:              Date;
    status:            number;
    bank_nadawcy:      string;
    rachunek_nadawcy:  string;
    nazwa_nadawcy:     string;
    adres_nadawcy:     string;
    bank_odbiorcy:     string;
    rachunek_odbiorcy: string;
    nazwa_odbiorcy:    string;
    adres_odbiorcy:    string;
    kwota:             number;
    tytul:             string;
}