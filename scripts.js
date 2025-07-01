// Custom Tailwind configuration for animations and keyframes
/* exported tailwind */
tailwind.config = {
    theme: {
        extend: {
            // Custom animations for enhanced UX
            animation: {
                'float': 'float 6s ease-in-out infinite',        // Floating airship animation
                'modal-slide-in': 'modalSlideIn 0.3s ease',     // Modal entrance animation
                'shimmer': 'shimmer 2s infinite'                // Loading shimmer effect
            },
            // Keyframe definitions for custom animations
            keyframes: {
                // Gentle floating motion for airship SVG
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                // Smooth modal entrance with scale and slide
                modalSlideIn: {
                    'from': {
                        opacity: '0',
                        transform: 'scale(0.9) translateY(-20px)'
                    },
                    'to': {
                        opacity: '1',
                        transform: 'scale(1) translateY(0)'
                    }
                },
                // Loading shimmer effect for placeholders
                shimmer: {
                    '0%': { left: '-100%' },
                    '100%': { left: '100%' }
                }
            }
        }
    }
};
