import { Migration } from '@mikro-orm/migrations';

export class Migration20210517012549 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "create_at" timestamptz(0) not null, "update_at" timestamptz(0) not null, "title" text not null);');
  }

}
