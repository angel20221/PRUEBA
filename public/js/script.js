var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('success')) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito!',
        text: urlParams.get('success'),
        timer: 3000
      });
    }
    
    if (urlParams.has('error')) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: urlParams.get('error'),
        timer: 4000
      });
    }
  });

async function openEditModal(id) {
    try{
        const response = await fetch(`/products/${id}/edit`);        
        const html = await response.text();

        const container = document.getElementById('editModalContainer');
        container.innerHTML=html;

        const editModal = new bootstrap.Modal(document.getElementById('editModal'), {
            backdrop: 'static',
            keyboard: false
          });
          
          editModal.show();
    }catch(error){
        Swal.fire('Error', 'No se pudo cargar la edición', 'error');
    }
    
}

function confirmDelete(id) {
    Swal.fire({
      title: '¿Eliminar producto?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = `/products/${id}/delete`;
      }
    });
  }