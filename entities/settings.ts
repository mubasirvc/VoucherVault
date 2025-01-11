import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id?:number;

  @Column({ default: "Redeem Your Voucher Now!" })
  title: string;

  @Column({ default: 4 })
  titleSize: number;

  @Column({ default: 2 })
  textSize: number;

  @Column({ default: 64 })
  voucherWidth: number;

  @Column({ default: 64 })
  voucherHeight: number;
}
