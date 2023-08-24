class CreateMultipleTables < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :company_name

      t.timestamps
    end
    create_table :resources do |t|
      t.belongs_to :accounts, null: false, foreign_key: true
      t.string :resource_name
      t.string :colour

      t.timestamps
    end
    create_table :bookings do |t|
      t.belongs_to :resource, null: false, foreign_key: true
      t.belongs_to :account, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.time :start_date
      t.time :end_date
      t.text :notes

      t.timestamps
    end
  end
end
