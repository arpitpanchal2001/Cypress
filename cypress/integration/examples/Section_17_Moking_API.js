describe('Moking api using intercept', function () {
    xit('Moking Resopnse Body with only single entry and checking the message', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        // cy.intercept({requestbody},{responsebody})
        cy.intercept({
            method: "get",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                },]
        }).as('bookretrivals')
        cy.get('button[class*="btn btn-primary"]').click()
        cy.wait('@bookretrivals').then(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)

        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })

    xit('Moking Request url trying to fetch malhorta list in shettys account', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
            (req) => {
                req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=arpit"
                req.continue((res) => {
                    // expect(res.statusCode).to.equal(403)
                })
            }).as('mokedReq')
        cy.get('button[class*="btn btn-primary"]').click()
        cy.wait('@mokedReq')

    })

    it('directly hitting request using cypress request command' , function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',
        {

            "name":"Learn Appium Automation with Java",
            "isbn":"abdawdc",
            "aisle":"2278",
            "author":"John foe"
            }).then(function(response){
                expect(response.body).to.have.property('Msg','successfully added')
            })
    })
})