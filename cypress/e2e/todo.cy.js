describe('Crear tarea', () => {
    it('1.Debería permitir agregar una tarea correctamente', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("compra{enter}")
      cy.get('[data-testid="todo-item-label"]').contains("compra")
      cy.get('[data-testid="todo-item-label"]').should('contain', 'compra')
    })
    it('2.Marcar tarea como completada', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("compra{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="todo-item-label"]').contains("compra")
    })
    it('3.Desmarcar tarea completada', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("compra{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="todo-item-label"]').contains("compra")
    })
    it('4.Editar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("compra{enter}")
      cy.get('[data-testid="todo-item-label"]').dblclick()
      cy.get('.view > .input-container > [data-testid="text-input"]').clear().type("limpiar{enter}")
      cy.get('[data-testid="todo-item-label"]').contains("limpiar")
    })
    it('5.Borra tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("compra{enter}")
      cy.get('.destroy').click({ force: true })
      cy.get('[data-testid="todo-item-label"]').should('not.exist')
    })
    it('6.Filtrar tareas', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("compra{enter}")
      cy.get('[data-testid="text-input"]').type("limpiar{enter}")
      cy.get('[data-testid="text-input"]').type("cortar{enter}")
      cy.get('[data-testid="text-input"]').type("reponer{enter}")

      cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
      cy.get(':nth-child(4) > .view > [data-testid="todo-item-toggle"]').click()

      cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
      cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').contains("limpiar")
      cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').contains("reponer")

      cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click()
      cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').contains("compra")
      cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').contains("cortar")

      cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a').click()
    })
})