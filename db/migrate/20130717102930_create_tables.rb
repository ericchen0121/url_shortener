class CreateTables < ActiveRecord::Migration
  def change
    create_table :urls do |t|
      t.string :long
      t.string :short
      t.integer :clicks, default: 0
    end
  end
end
