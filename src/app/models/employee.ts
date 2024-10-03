/* export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    sal: number;
    email: string;
} */

export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    sal: number;
    email: string;

    constructor(id: number, firstName: string, lastName: string, sal: number, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sal = sal;
        this.email = email;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getAnnualSal() {
        return this.sal * 12;
    }
}
