// Reset data inputs når modal lukkes
$('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
});