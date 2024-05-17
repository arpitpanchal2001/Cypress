Feature: End to End Ecommerce validation

    application Regression

    Scenario: Ecommerce Product Delivery
    Given I open ecommerce page
    When i add items to cart
    Then Validate the total price
    Then Select the submit and verify success