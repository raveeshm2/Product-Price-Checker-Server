import { Typegoose, prop } from "@hasezoey/typegoose";

export class user extends Typegoose {

    @prop({ required: true })
    email!: string

    @prop({ required: true })
    password!: string

    @prop()
    cron?: string
}