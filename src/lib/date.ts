"use strict";

export class DateFormat {
    public static toTwoDigit(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
    }

    public static format(time: Date | number, formation: string): string {
        return new DateFormat(time).format(formation);
    }

    private date: Date;

    constructor(time: Date | number) {
        if (typeof time === "number") {
            this.date = new Date(time);
        } else {
            this.date = time;
        }
    }

    public format(formation: string): string {
        const thiz = this as any;
        return ("" + formation).replace(
            /Y+|M+|D+|d+|H+|h+|m+|s+/g,
            ($0: string) => {
                const result = thiz[$0];
                return result === undefined ? $0 : result;
            }
        );
    }

    get YY() {
        return this.YYYY.toString().slice(2);
    }

    get YYYY() {
        return this.date.getFullYear();
    }

    get M() {
        return this.date.getMonth() + 1;
    }

    get MM() {
        return DateFormat.toTwoDigit(this.M);
    }

    get D() {
        return this.date.getDate();
    }

    get DD() {
        return DateFormat.toTwoDigit(this.D);
    }

    get H() {
        return this.date.getHours();
    }

    get HH() {
        return DateFormat.toTwoDigit(this.H);
    }

    get h() {
        const h = this.H;
        return h > 12 ? h - 12 : h;
    }

    get hh() {
        return DateFormat.toTwoDigit(this.h);
    }

    get m() {
        return this.date.getMinutes();
    }

    get mm() {
        return DateFormat.toTwoDigit(this.m);
    }

    get s() {
        return this.date.getSeconds();
    }

    get ss() {
        return DateFormat.toTwoDigit(this.s);
    }
}
