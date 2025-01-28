(function($) {
    'use strict';

    /**
     * Displays a toast notification on the screen.
     * @param {string} message - The message to be displayed in the toast.
     * @param {'success' | 'error'} type - The type of the toast (success or error).
     */
    function showToast(message, type = 'success') {
        if (type !== 'success' && type !== 'error') {
            throw new Error(`Invalid toast type: "${type}". Allowed values are 'success' or 'error'.`);
        }

        const icon = type === 'success'
            ? '<i class="fas fa-check-circle"></i>'
            : '<i class="fas fa-times-circle"></i>';

        const $toast = $(`
            <div class="toast ${type}">
                ${icon} ${message}
            </div>
        `);

        $('body').append($toast);

        setTimeout(() => removeToast($toast), 3500);
    }

    function removeToast($toast) {
        $toast.addClass('fade-out');
        setTimeout(() => $toast.remove(), 1000);
    }

    window.showToast = showToast;
})(jQuery);
