// Catalogo editable: cada producto puede sumar una imagen o video cuando esten disponibles.
(() => {
	// PRECIOS — Editá los valores en ARS cuando tengas los precios confirmados; null muestra "Consultar precio".
	const PRECIOS = {
		'acolchado-multicolor': null,
		'ropa-de-cama-turquesa': null,
		'toallones-colores': null,
		'ropa-de-cama-rosa': null,
		'frazadas-apiladas': null,
		'alfombras-colores': null,
		'ropa-de-cama-gris': null,
		'textiles-cama-tonos-pastel': null,
		'acolchado-tonos-calidos': null
	};

	const productos = [
		{ id: 'acolchado-multicolor', nombre: 'Acolchado multicolor', tipo: 'Acolchados', descripcion: 'Consultá precio, colores y medidas disponibles.', imagen: 'imagenes/productos/acolchado-multicolor.jpg', imagenAlt: 'Acolchado multicolor extendido sobre una cama', video: '' },
		{ id: 'ropa-de-cama-turquesa', nombre: 'Ropa de cama turquesa', tipo: 'Ropa de cama', descripcion: 'Consultá precio, colores y medidas disponibles.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Cama cubierta con ropa de cama turquesa', video: '' },
		{ id: 'toallones-colores', nombre: 'Toallones en varios colores', tipo: 'Toallas', descripcion: 'Consultá precio y colores disponibles.', imagen: 'imagenes/productos/toallones-colores.jpg', imagenAlt: 'Toallones exhibidos en varios colores', video: '' },
		{ id: 'ropa-de-cama-rosa', nombre: 'Ropa de cama rosa', tipo: 'Ropa de cama', descripcion: 'Consultá precio, colores y medidas disponibles.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Cama con ropa de cama en tonos rosas', video: '' },
		{ id: 'frazadas-apiladas', nombre: 'Frazadas en varios colores', tipo: 'Frazadas', descripcion: 'Consultá precio y colores disponibles.', imagen: 'imagenes/productos/frazadas-apiladas.jpg', imagenAlt: 'Frazadas dobladas en varios colores', video: '' },
		{ id: 'alfombras-colores', nombre: 'Alfombras en varios colores', tipo: 'Alfombras', descripcion: 'Consultá precio, colores y medidas disponibles.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Alfombras exhibidas en varios colores', video: '' },
		{ id: 'ropa-de-cama-gris', nombre: 'Ropa de cama gris', tipo: 'Ropa de cama', descripcion: 'Consultá precio, colores y medidas disponibles.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Cama cubierta con ropa de cama gris', video: '' },
		{ id: 'textiles-cama-tonos-pastel', nombre: 'Textiles para cama en tonos pastel', tipo: 'Ropa de cama', descripcion: 'Consultá precio, colores y medidas disponibles.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Textiles para cama doblados en tonos pastel', video: '' },
		{ id: 'acolchado-tonos-calidos', nombre: 'Acolchado en tonos cálidos', tipo: 'Acolchados', descripcion: 'Consultá precio, colores y medidas disponibles.', imagen: 'imagenes/productos/acolchado-tonos-calidos.jpg', imagenAlt: 'Acolchado en tonos marrones sobre una cama', video: '' }
	];

	// Reemplazá estos valores de ejemplo por los datos reales del negocio.
	const CONTACTO = {
		whatsapp: '+54 9 2233 47-2933', // Código de país + número, solo dígitos y sin el signo +.
		facebook: 'https://www.facebook.com/share/1EpydHESBC/',
		instagram: 'https://www.instagram.com/tiendaanube?utm_source=qr&stkn=MTN4cWo4cml3NXdxMw=='
	};
	const claveCanasta = 'tiendaa-nube-canasta';
	const formatoPrecio = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
	const porId = new Map(productos.map(producto => [producto.id, producto]));
	const escapar = valor => String(valor).replace(/[&<>"']/g, caracter => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[caracter]);
	const normalizar = valor => valor.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

	function iniciar() {
		const lista = document.getElementById('lista-productos');
		if (!lista) return;

		const buscar = document.getElementById('buscar-productos');
		const dialogo = document.getElementById('dialogo-carrito');
		const itemsCarrito = document.getElementById('items-carrito');
		const mapaCanasta = leerCanasta();

		function leerCanasta() {
			try {
				const guardado = JSON.parse(localStorage.getItem(claveCanasta) || '{}');
				return new Map(Object.entries(guardado).filter(([id, cantidad]) => porId.has(id) && Number.isInteger(cantidad) && cantidad > 0));
			} catch {
				return new Map();
			}
		}

		function guardarCanasta() {
			try {
				localStorage.setItem(claveCanasta, JSON.stringify(Object.fromEntries(mapaCanasta)));
			} catch {
				// La canasta sigue disponible durante esta visita aunque el navegador no permita guardarla.
			}
		}

		function urlWhatsApp() {
			return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensajeConsulta())}`;
		}

		function mensajeConsulta() {
			const elegidos = [...mapaCanasta.entries()];
			if (!elegidos.length) return 'Hola quisiera saber mas sobre los productos de TIENDAA NUBE';

			const detalle = elegidos.map(([id, cantidad]) => {
				const producto = porId.get(id);
				const precio = PRECIOS[producto.id] == null ? 'Precio a consultar' : `Precio: ${formatoPrecio.format(PRECIOS[producto.id])}`;
				const foto = producto.imagen ? `Foto: ${new URL(producto.imagen, window.location.href).href}` : 'Foto: pendiente de cargar';
				return `- ${producto.nombre} (cantidad: ${cantidad})\n  ${precio}\n  ${foto}`;
			}).join('\n');
			return `Hola buenas, te queria consultar para comprar estos productos:\n${detalle}`;
		}

		function actualizarEnlaces() {
			document.getElementById('red-whatsapp').href = urlWhatsApp();
			document.getElementById('contactar-whatsapp').href = urlWhatsApp();
			document.getElementById('red-facebook').href = CONTACTO.facebook;
			document.getElementById('contactar-facebook').href = CONTACTO.facebook;
			document.getElementById('red-instagram').href = CONTACTO.instagram;
			document.getElementById('contactar-instagram').href = CONTACTO.instagram;
		}

		function renderizarProductos(filtro = '') {
			const consulta = normalizar(filtro.trim());
			const encontrados = productos.filter(producto => normalizar(`${producto.nombre} ${producto.tipo} ${producto.descripcion}`).includes(consulta));
			lista.innerHTML = encontrados.length ? encontrados.map(producto => {
				const imagen = producto.imagen
					? `<img src="${escapar(producto.imagen)}" alt="${escapar(producto.imagenAlt || producto.nombre)}" loading="lazy" decoding="async">`
					: '<span class="media-placeholder">Foto próximamente</span>';
				const video = producto.video
					? `<video controls preload="none"${producto.imagen ? ` poster="${escapar(producto.imagen)}"` : ''} aria-label="Video de ${escapar(producto.nombre)}"><source src="${escapar(producto.video)}"></video>`
					: '';
				const cantidad = mapaCanasta.get(producto.id) || 0;
				const precio = PRECIOS[producto.id] == null ? 'Consultar precio' : formatoPrecio.format(PRECIOS[producto.id]);
				return `<article class="product"><div class="media">${imagen}${video}</div><div class="product-info"><span class="category">${escapar(producto.tipo)}</span><h3>${escapar(producto.nombre)}</h3><p class="description">${escapar(producto.descripcion)}</p><div class="purchase"><span class="price">${precio}</span><button class="add" type="button" data-agregar="${producto.id}">${cantidad ? `Agregar (${cantidad})` : 'Agregar a la canasta'}</button></div></div></article>`;
			}).join('') : '<p class="empty">No encontramos productos con esa búsqueda.</p>';
		}

		function renderizarCanasta() {
			const cantidadTotal = [...mapaCanasta.values()].reduce((suma, cantidad) => suma + cantidad, 0);
			const total = [...mapaCanasta.entries()].some(([id]) => PRECIOS[id] == null)
				? 'Consultar precio'
				: formatoPrecio.format([...mapaCanasta.entries()].reduce((suma, [id, cantidad]) => suma + PRECIOS[id] * cantidad, 0));
			document.getElementById('cantidad-carrito').textContent = cantidadTotal;
			document.getElementById('total-carrito').textContent = total;
			itemsCarrito.innerHTML = cantidadTotal ? [...mapaCanasta.entries()].map(([id, cantidad]) => {
				const producto = porId.get(id);
				const precio = PRECIOS[id] == null ? 'Consultar precio' : `${formatoPrecio.format(PRECIOS[id])} c/u`;
				return `<div class="cart-item"><div><strong>${escapar(producto.nombre)}</strong><p>${precio}</p></div><div class="quantity"><button type="button" data-cambiar="menos" data-id="${id}" aria-label="Quitar una unidad de ${escapar(producto.nombre)}">−</button><span>${cantidad}</span><button type="button" data-cambiar="mas" data-id="${id}" aria-label="Agregar una unidad de ${escapar(producto.nombre)}">+</button></div></div>`;
			}).join('') : '<p class="cart-empty">Todavía no agregaste productos.</p>';
			actualizarEnlaces();
		}

		async function copiarMensaje() {
			const texto = mensajeConsulta();
			const aviso = document.getElementById('aviso-contacto');
			try {
				await navigator.clipboard.writeText(texto);
				aviso.textContent = 'Mensaje copiado. Pegalo en el chat de la red.';
			} catch {
				aviso.textContent = 'No se pudo copiar automáticamente. Usá WhatsApp para enviar el mensaje preparado.';
			}
		}

		lista.addEventListener('click', evento => {
			const boton = evento.target.closest('[data-agregar]');
			if (!boton) return;
			const id = boton.dataset.agregar;
			mapaCanasta.set(id, (mapaCanasta.get(id) || 0) + 1);
			guardarCanasta();
			renderizarProductos(buscar.value);
			renderizarCanasta();
		});
		itemsCarrito.addEventListener('click', evento => {
			const boton = evento.target.closest('[data-cambiar]');
			if (!boton) return;
			const cantidad = (mapaCanasta.get(boton.dataset.id) || 0) + (boton.dataset.cambiar === 'mas' ? 1 : -1);
			if (cantidad > 0) mapaCanasta.set(boton.dataset.id, cantidad);
			else mapaCanasta.delete(boton.dataset.id);
			guardarCanasta();
			renderizarProductos(buscar.value);
			renderizarCanasta();
		});
		buscar.addEventListener('input', () => renderizarProductos(buscar.value));
		document.getElementById('abrir-carrito').addEventListener('click', () => dialogo.showModal());
		document.getElementById('cerrar-carrito').addEventListener('click', () => dialogo.close());
		dialogo.addEventListener('click', evento => {
			if (evento.target === dialogo) dialogo.close();
		});
		document.getElementById('contactar-facebook').addEventListener('click', copiarMensaje);
		document.getElementById('contactar-instagram').addEventListener('click', async evento => {
			evento.preventDefault();
			window.open(CONTACTO.instagram, '_blank', 'noopener');
			void copiarMensaje();
		});
		document.getElementById('red-facebook').addEventListener('click', copiarMensaje);
		document.getElementById('red-instagram').addEventListener('click', copiarMensaje);
		document.getElementById('anio').textContent = new Date().getFullYear();
		renderizarProductos();
		renderizarCanasta();
	}

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar, { once: true });
	else iniciar();
})();
