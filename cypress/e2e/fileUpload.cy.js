import 'cypress-file-upload'

describe('File Upload',()=>{

    it('using the choose file option for single file', () => {
        cy
        .visit('http://the-internet.herokuapp.com/upload')

        cy
        .get('#file-upload')
        .attachFile('file.pdf')

        cy
        .get('#file-submit')
        .click()

        cy
        .wait(5000)

        cy
        .get('.example>h3').should('have.text','File Uploaded!')


        
    });

    it('File upload-Rename', () => {

        cy
        .visit('http://the-internet.herokuapp.com/upload')

        cy
        .get('#file-upload')
        .attachFile({filePath:'file.pdf',fileName:'myfile.pdf'})

        cy
        .get('#file-submit')
        .click()

        cy
        .wait(5000)

        cy
        .get('.example>h3').should('have.text','File Uploaded!')
        
    });

    it('Using drag and drop', () => {
        cy
        .visit('http://the-internet.herokuapp.com/upload')

        cy
        .get('#drag-drop-upload')
        .attachFile('file.pdf',{subjectType:'drag-n-drop'})

        cy
        .wait(5000)

        cy
        .get('[class="dz-filename"]>span').should('contain','file.pdf')
});

it('uploading multiple files', () => {

    cy
    .visit('https://davidwalsh.name/demo/multiple-file-upload.php')

    cy
    .get('#filesToUpload')
    .attachFile(['file.pdf','f.pdf'])
    .click()

    cy
    .wait(2000)

    cy
    .get('#fileList > :nth-child(1)')
    .should('be.visible')

    cy
    .get('#fileList > :nth-child(2)')
    .should('be.visible')
});

it.only('File upload shadow dom', () => {
    cy
    .visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')

    cy
    .get('input[type="file"]',{includeShadowDom:true}).attachFile('file.pdf')

    cy
    .wait(5000)

    cy
    .get('span[class="smart-item-name"]',{includeShadowDom:true})
    .contains('file.pdf')

    
});//a dom containing another dom



})