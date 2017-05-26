class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :coverImage,
      t.string :title,
      t.string :author,
      t.date, :releaseDate
      t.string :keywords

      t.timestamps
    end
  end
end
