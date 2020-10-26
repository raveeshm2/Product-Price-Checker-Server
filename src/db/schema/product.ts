import { Typegoose, prop } from "@hasezoey/typegoose";

export class product extends Typegoose {

    @prop({ required: true })
    alias!: string

    @prop({ required: true })
    url!: string

    @prop({ required: false })
    cutOffPrice!: number;

    @prop({ required: true })
    portal!: string;
}