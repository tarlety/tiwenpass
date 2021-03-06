import { Department } from './department';

export class Employee {
    private _user_id: number;
    private _name: string;
    private _account: string;
    private _title: string;
    private _departments: Department[];

    public get user_id(): number {
        return this._user_id;
    }
    public set user_id(value: number) {
        this._user_id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get account(): string {
        return this._account;
    }
    public set account(value: string) {
        this._account = value;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get departments(): Department[] {
        return this._departments;
    }
    public set departments(value: Department[]) {
        const departments: Department[] = new Array();
        if (value != null) {
            for (const department of value) {
                departments.push(Object.assign(new Department(), department));
            }
        }

        this._departments = departments;
    }

    public currentDepartment(): Department {
        return this._departments[this._departments.length-1];
    }
}
