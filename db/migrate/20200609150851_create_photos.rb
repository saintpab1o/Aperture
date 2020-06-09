class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :caption, null:false
      t.string :location, null:false
      t.integer :photographer_id, null:false
      t.integer :views, default: 0

      t.timestamps

    end
    add_index :photos, :location
    add_index :photos, :photographer_id
  end
end
