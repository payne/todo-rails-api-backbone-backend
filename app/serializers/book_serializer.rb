class BookSerializer < ActiveModel::Serializer
  attributes :id, :coverImage, :title, :author, :releaseDate, :keywords
end
