require 'test_helper'

class UiTestControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ui_test_index_url
    assert_response :success
  end

end
