# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_password_digest  (password_digest) UNIQUE
#  index_users_on_session_token    (session_token) UNIQUE
#  index_users_on_username         (username) UNIQUE
#
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    after_initialize :ensure_session_token


    has_many :photos,
    foreign_key: :photographer_id,
    class_name: :Photo

    has_many :follows,
    foreign_key: :following_id,
    class_name: :Follow

    has_many :followers,
    foreign_key: :follower_id,
    class_name: :Follow



    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil? 
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token
    end


end
