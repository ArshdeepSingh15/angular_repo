import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface TestProps {
id: number,
title?: string,
}

@Component({
selector: 'app-test',
imports: [FormsModule],
templateUrl: './test.html',
styleUrl: './test.css',
})
export class Test {
isLoggedIn = signal(true);
user = signal({name: "Arshdip" });
resetName(){
this.user.update((u => ({...u, name: ''})));
}
items = signal<TestProps []> ([{id: 1, title: "Hobby"}, {id: 2, title: "Goals"}]);
}