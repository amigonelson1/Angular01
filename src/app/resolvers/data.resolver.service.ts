import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

const departments = ['Marketing', 'Sales', 'HR', 'Others']

@Injectable({ providedIn: 'root' })
export class DataResolverService {
    resolve(): Observable<any> {
        // TODO: CALL SERVICES
        return of(departments);
    }
}