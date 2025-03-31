describe('Gestión de Tareas', () => {
  beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/');
  });

  it('Crear tarea', () => {
      cy.get('input[name="task"]')
          .type('Nueva Tarea{enter}');
      cy.contains('Nueva Tarea').should('exist');
  });

  it('Marcar tarea como completada', () => {
      cy.get('input[name="task"]')
          .type('Tarea Completa{enter}');
      cy.contains('Tarea Completa')
          .parent()
          .find('.check-button')
          .click();
      cy.contains('Tarea Completa')
          .parent()
          .should('have.class', 'completed');
  });

  it('Desmarcar tarea completada', () => {
      cy.get('input[name="task"]')
          .type('Tarea para Desmarcar{enter}');
      cy.contains('Tarea para Desmarcar')
          .parent()
          .find('.check-button')
          .click()
          .click();
      cy.contains('Tarea para Desmarcar')
          .parent()
          .should('not.have.class', 'completed');
  });

  it('Editar tarea', () => {
      cy.get('input[name="task"]')
          .type('Tarea a Editar{enter}');
      cy.contains('Tarea a Editar')
          .dblclick()
          .clear()
          .type('Tarea Editada{enter}');
      cy.contains('Tarea Editada').should('exist');
  });

  it('Borrar tarea', () => {
      cy.get('input[name="task"]')
          .type('Tarea a Borrar{enter}');
      cy.contains('Tarea a Borrar')
          .parent()
          .find('.delete-button')
          .click();
      cy.contains('Tarea a Borrar').should('not.exist');
  });

  it('Filtrar tareas', () => {
      cy.get('input[name="task"]')
          .type('Tarea 1{enter}')
          .type('Tarea 2{enter}');
      
      cy.contains('Tarea 1')
          .parent()
          .find('.check-button')
          .click();
      
      cy.get('.filter-completed').click();
      cy.contains('Tarea 1').should('exist');
      cy.contains('Tarea 2').should('not.exist');
      
      cy.get('.filter-active').click();
      cy.contains('Tarea 1').should('not.exist');
      cy.contains('Tarea 2').should('exist');
      
      cy.get('.filter-all').click();
      cy.contains('Tarea 1').should('exist');
      cy.contains('Tarea 2').should('exist');
  });
});