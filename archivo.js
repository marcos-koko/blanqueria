// Catalogo editable: cada producto puede sumar una imagen o video cuando esten disponibles.
(() => {
	// PRECIOS — Editá los valores en ARS cuando tengas los precios confirmados; null muestra "Consultar precio".
	const PRECIOS = {
		'acolchado-multicolor': null,
		'acolchado-multicolor-queen': null,
		'acolchado-multicolor-king': null,
		'ropa-de-cama-turquesa': null,
		'ropa-de-cama-turquesa-premium': null,
		'toallones-colores-pack-3': null,
		'toallones-colores-pack-6': null,
		'ropa-de-cama-rosa': null,
		'ropa-de-cama-rosa-premium': null,
		'frazadas-apiladas': null,
		'frazadas-apiladas-premium': null,
		'alfombras-colores-pequena': null,
		'alfombras-colores-mediana': null,
		'alfombras-colores-grande': null,
		'ropa-de-cama-gris': null,
		'ropa-de-cama-gris-premium': null,
		'textiles-cama-tonos-pastel': null,
		'textiles-cama-tonos-pastel-premium': null,
		'acolchado-tonos-calidos': null,
		'acolchado-tonos-calidos-queen': null,
		'almohadas-relleno-fibra': null,
		'almohadas-relleno-pluma': null,
		'set-toallas-bano-6-piezas': null,
		'set-toallas-bano-12-piezas': null,
		'toallones-bano-turquesa': null,
		'toallones-bano-rosa': null,
		'toallones-bano-gris': null,
		'manta-abrigo-suave': null,
		'manta-verano-ligera': null,
		'frazada-invierno-thermal': null,
		'frazada-invierno-polar': null,
		'sabanas-algodon-180-hilos': null,
		'sabanas-algodon-200-hilos': null,
		'sabanas-algodon-400-hilos': null,
		'edredon-sintetico-queen': null,
		'edredon-sintetico-king': null,
		'edredon-pluma-queen': null,
		'edredon-pluma-king': null,
		'almohada-espuma-viscoelastica': null,
		'almohada-espuma-memory': null,
		'protector-colchon-impermeable': null,
		'sabana-bajera-elastica-queen': null,
		'sabana-bajera-elastica-king': null,
		'sabana-superior-algodon-queen': null,
		'sabana-superior-algodon-king': null,
		'cortina-salon-turquesa': null,
		'cortina-salon-rosa': null,
		'cortina-salon-gris': null,
		'cortina-dormitorio-tonos-pastel': null,
		'cortina-blackout-oscurecedora': null,
		'mantel-mesa-6-personas': null,
		'mantel-mesa-8-personas': null,
		'mantel-mesa-10-personas': null,
		'servilletas-algodon-set-12': null,
		'servilletas-lino-set-6': null,
		'camino-mesa-lino': null,
		'tapete-entrada-alfombra': null,
		'tapete-bano-antideslizante': null,
		'tapete-bano-memoria-forma': null,
		'cojin-decorativo-rosa': null,
		'cojin-decorativo-turquesa': null,
		'cojin-decorativo-gris': null,
		'cojin-decorativo-pastel': null,
		'cojin-terciopelo-pack-2': null,
		'cojin-terciopelo-pack-4': null,
		'funda-almohada-decorativa': null,
		'funda-cojin-removible': null,
		'puff-reposapiés-turquesa': null,
		'puff-reposapiés-rosa': null,
		'puff-reposapiés-gris': null,
		'puff-storage-organizador': null,
		'banco-tapizado-dormitorio': null,
		'cortina-sheer-translucida': null,
		'cortina-lino-natural': null,
		'cortina-motorizada-smart': null,
		'panel-divisor-tela': null,
		'cortina-thermal-aislante': null,
		'toalla-bano-premium-turquesa': null,
		'toalla-bano-premium-rosa': null,
		'toalla-bano-premium-gris': null,
		'toalla-mano-turquesa': null,
		'toalla-mano-rosa': null,
		'toalla-mano-gris': null,
		'toalla-visitas-set-6': null,
		'toalla-playa-grande': null,
		'toalla-playa-jumbo': null,
		'toalla-microfibra-secado-rapido': null
	};

	const productos = [
		{ id: 'acolchado-multicolor', nombre: 'Acolchado multicolor queen', tipo: 'Acolchados', descripcion: 'Acolchado multicolor vibrante para cama queen. Diseño moderno y versátil.', imagen: 'imagenes/productos/acolchado-multicolor.jpg', imagenAlt: 'Acolchado multicolor queen' },
		{ id: 'acolchado-multicolor-queen', nombre: 'Acolchado multicolor premium', tipo: 'Acolchados', descripcion: 'Versión premium con relleno extra grueso para máximo confort.', imagen: 'imagenes/productos/acolchado-multicolor.jpg', imagenAlt: 'Acolchado multicolor premium queen' },
		{ id: 'acolchado-multicolor-king', nombre: 'Acolchado multicolor king size', tipo: 'Acolchados', descripcion: 'Acolchado amplío en tamaño king para máxima comodidad.', imagen: 'imagenes/productos/acolchado-multicolor.jpg', imagenAlt: 'Acolchado multicolor king size' },
		{ id: 'ropa-de-cama-turquesa', nombre: 'Juego de ropa de cama turquesa', tipo: 'Ropa de cama', descripcion: 'Set completo en tonos turquesa con excelente relación calidad-precio.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Ropa de cama turquesa completa' },
		{ id: 'ropa-de-cama-turquesa-premium', nombre: 'Ropa de cama turquesa línea premium', tipo: 'Ropa de cama', descripcion: 'Algodón 100% premium con terminación de lujo y durabilidad extendida.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Ropa de cama turquesa premium' },
		{ id: 'toallones-colores-pack-3', nombre: 'Toallones varios colores pack 3', tipo: 'Toallas', descripcion: 'Pack de 3 toallones suaves y absorbentes en colores variados.', imagen: 'imagenes/productos/toallones-colores.jpg', imagenAlt: 'Toallones pack 3 colores' },
		{ id: 'toallones-colores-pack-6', nombre: 'Toallones varios colores pack 6', tipo: 'Toallas', descripcion: 'Pack económico de 6 toallones para toda la familia.', imagen: 'imagenes/productos/toallones-colores.jpg', imagenAlt: 'Toallones pack 6 colores' },
		{ id: 'ropa-de-cama-rosa', nombre: 'Juego de ropa de cama rosa', tipo: 'Ropa de cama', descripcion: 'Set elegante en tonos rosa pastel para un descanso romántico.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Ropa de cama rosa completa' },
		{ id: 'ropa-de-cama-rosa-premium', nombre: 'Ropa de cama rosa premium', tipo: 'Ropa de cama', descripcion: 'Edición premium con acabado satinado y máxima suavidad.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Ropa de cama rosa premium' },
		{ id: 'frazadas-apiladas', nombre: 'Frazadas varios colores', tipo: 'Frazadas', descripcion: 'Frazadas en variedad de colores para todas las estaciones.', imagen: 'imagenes/productos/frazadas-apiladas.jpg', imagenAlt: 'Frazadas en varios colores' },
		{ id: 'frazadas-apiladas-premium', nombre: 'Frazadas premium extra gruesas', tipo: 'Frazadas', descripcion: 'Frazadas de máxima calidad con espesor premium para invierno.', imagen: 'imagenes/productos/frazadas-apiladas.jpg', imagenAlt: 'Frazadas premium extra gruesas' },
		{ id: 'alfombras-colores-pequena', nombre: 'Alfombra pequeña multicolor', tipo: 'Alfombras', descripcion: 'Alfombra compacta ideal para espacios reducidos y entradas.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Alfombra pequeña colorida' },
		{ id: 'alfombras-colores-mediana', nombre: 'Alfombra mediana varios colores', tipo: 'Alfombras', descripcion: 'Tamaño mediano versátil para salas y dormitorios.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Alfombra mediana multicolor' },
		{ id: 'alfombras-colores-grande', nombre: 'Alfombra grande multicolor', tipo: 'Alfombras', descripcion: 'Alfombra XXL que cubre amplios espacios con estilo.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Alfombra grande multicolor' },
		{ id: 'ropa-de-cama-gris', nombre: 'Juego de ropa de cama gris', tipo: 'Ropa de cama', descripcion: 'Set gris neutro y elegante que combina con cualquier decoración.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Ropa de cama gris neutra' },
		{ id: 'ropa-de-cama-gris-premium', nombre: 'Ropa de cama gris línea premium', tipo: 'Ropa de cama', descripcion: 'Gris premium con tejido densificado y acabado impecable.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Ropa de cama gris premium' },
		{ id: 'textiles-cama-tonos-pastel', nombre: 'Textiles cama tonos pastel', tipo: 'Ropa de cama', descripcion: 'Suave colección en tonos pasteles para descanso relajante.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Textiles cama tonos pastel' },
		{ id: 'textiles-cama-tonos-pastel-premium', nombre: 'Textiles cama pastel premium', tipo: 'Ropa de cama', descripcion: 'Colección premium con tonos pastel y máxima transpirabilidad.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Textiles cama pastel premium' },
		{ id: 'acolchado-tonos-calidos', nombre: 'Acolchado tonos cálidos', tipo: 'Acolchados', descripcion: 'Acolchado con tonalidades cálidas que transmite calidez y confort.', imagen: 'imagenes/productos/acolchado-tonos-calidos.jpg', imagenAlt: 'Acolchado tonos cálidos' },
		{ id: 'acolchado-tonos-calidos-queen', nombre: 'Acolchado tonos cálidos queen', tipo: 'Acolchados', descripcion: 'Tamaño queen en tonos cálidos ideal para parejas.', imagen: 'imagenes/productos/acolchado-tonos-calidos.jpg', imagenAlt: 'Acolchado cálido queen' },
		{ id: 'almohadas-relleno-fibra', nombre: 'Almohadas relleno fibra siliconada', tipo: 'Accesorios', descripcion: 'Almohadas cómodas con relleno de fibra de excelente durabilidad.', imagen: 'imagenes/productos/acolchado-multicolor.jpg', imagenAlt: 'Almohadas fibra siliconada' },
		{ id: 'almohadas-relleno-pluma', nombre: 'Almohadas relleno pluma natural', tipo: 'Accesorios', descripcion: 'Almohadas de lujo con relleno de pluma pura para máximo confort.', imagen: 'imagenes/productos/acolchado-tonos-calidos.jpg', imagenAlt: 'Almohadas relleno pluma' },
		{ id: 'set-toallas-bano-6-piezas', nombre: 'Set toallas baño 6 piezas', tipo: 'Toallas', descripcion: 'Set completo para baño incluyendo toallones y toallas de mano.', imagen: 'imagenes/productos/toallones-colores.jpg', imagenAlt: 'Set toallas baño 6 piezas' },
		{ id: 'set-toallas-bano-12-piezas', nombre: 'Set toallas baño 12 piezas', tipo: 'Toallas', descripcion: 'Pack completo y económico con toallas para toda la familia.', imagen: 'imagenes/productos/toallones-colores.jpg', imagenAlt: 'Set toallas baño 12 piezas' },
		{ id: 'toallones-bano-turquesa', nombre: 'Toallones baño turquesa', tipo: 'Toallas', descripcion: 'Toallones en tonos turquesa de excelente absorbencia.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Toallones turquesa' },
		{ id: 'toallones-bano-rosa', nombre: 'Toallones baño rosa', tipo: 'Toallas', descripcion: 'Toallones suaves en tonos rosa para un baño elegante.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Toallones rosa' },
		{ id: 'toallones-bano-gris', nombre: 'Toallones baño gris', tipo: 'Toallas', descripcion: 'Toallones versátiles en tonos gris que combinan con todo.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Toallones gris' },
		{ id: 'manta-abrigo-suave', nombre: 'Manta abrigo suave de lana', tipo: 'Frazadas', descripcion: 'Manta acogedora perfecta para noches frías de invierno.', imagen: 'imagenes/productos/frazadas-apiladas.jpg', imagenAlt: 'Manta abrigo suave' },
		{ id: 'manta-verano-ligera', nombre: 'Manta verano ligera y transpirable', tipo: 'Frazadas', descripcion: 'Manta ligera ideal para climas cálidos y primavera.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Manta verano ligera' },
		{ id: 'frazada-invierno-thermal', nombre: 'Frazada invierno thermal', tipo: 'Frazadas', descripcion: 'Frazada térmica que retiene el calor corporal eficientemente.', imagen: 'imagenes/productos/acolchado-tonos-calidos.jpg', imagenAlt: 'Frazada thermal invierno' },
		{ id: 'frazada-invierno-polar', nombre: 'Frazada invierno polar', tipo: 'Frazadas', descripcion: 'Frazada polar ultra suave para máxima calidez.', imagen: 'imagenes/productos/frazadas-apiladas.jpg', imagenAlt: 'Frazada polar invierno' },
		{ id: 'sabanas-algodon-180-hilos', nombre: 'Sábanas algodón 180 hilos', tipo: 'Ropa de cama', descripcion: 'Sábanas básicas en algodón con densidad de 180 hilos.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Sábanas algodón 180 hilos' },
		{ id: 'sabanas-algodon-200-hilos', nombre: 'Sábanas algodón 200 hilos', tipo: 'Ropa de cama', descripcion: 'Sábanas de mejor calidad con densidad de 200 hilos.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Sábanas algodón 200 hilos' },
		{ id: 'sabanas-algodon-400-hilos', nombre: 'Sábanas algodón 400 hilos premium', tipo: 'Ropa de cama', descripcion: 'Sábanas de lujo con densidad premium de 400 hilos.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Sábanas algodón 400 hilos' },
		{ id: 'edredon-sintetico-queen', nombre: 'Edredón sintético queen', tipo: 'Acolchados', descripcion: 'Edredón económico de material sintético tamaño queen.', imagen: 'imagenes/productos/acolchado-multicolor.jpg', imagenAlt: 'Edredón sintético queen' },
		{ id: 'edredon-sintetico-king', nombre: 'Edredón sintético king', tipo: 'Acolchados', descripcion: 'Edredón sintético para cama king size.', imagen: 'imagenes/productos/acolchado-multicolor.jpg', imagenAlt: 'Edredón sintético king' },
		{ id: 'edredon-pluma-queen', nombre: 'Edredón pluma queen', tipo: 'Acolchados', descripcion: 'Edredón premium relleno de pluma queen.', imagen: 'imagenes/productos/acolchado-tonos-calidos.jpg', imagenAlt: 'Edredón pluma queen' },
		{ id: 'edredon-pluma-king', nombre: 'Edredón pluma king', tipo: 'Acolchados', descripcion: 'Edredón de lujo con pluma relleno king size.', imagen: 'imagenes/productos/acolchado-tonos-calidos.jpg', imagenAlt: 'Edredón pluma king' },
		{ id: 'almohada-espuma-viscoelastica', nombre: 'Almohada espuma viscoelástica', tipo: 'Accesorios', descripcion: 'Almohada ergonómica con espuma memoria que se adapta al cuerpo.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Almohada viscoelástica' },
		{ id: 'almohada-espuma-memory', nombre: 'Almohada memory foam deluxe', tipo: 'Accesorios', descripcion: 'Almohada memory foam de máxima calidad para cervicales.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Almohada memory foam' },
		{ id: 'protector-colchon-impermeable', nombre: 'Protector colchón impermeable', tipo: 'Accesorios', descripcion: 'Protector impermeable para conservar tu colchón en perfectas condiciones.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Protector colchón impermeable' },
		{ id: 'sabana-bajera-elastica-queen', nombre: 'Sábana bajera elástica queen', tipo: 'Ropa de cama', descripcion: 'Sábana bajera con elástico profundo para colchones queen.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Sábana bajera queen' },
		{ id: 'sabana-bajera-elastica-king', nombre: 'Sábana bajera elástica king', tipo: 'Ropa de cama', descripcion: 'Sábana bajera con elástico para colchones king size.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Sábana bajera king' },
		{ id: 'sabana-superior-algodon-queen', nombre: 'Sábana superior algodón queen', tipo: 'Ropa de cama', descripcion: 'Sábana superior de algodón puro tamaño queen.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Sábana superior queen' },
		{ id: 'sabana-superior-algodon-king', nombre: 'Sábana superior algodón king', tipo: 'Ropa de cama', descripcion: 'Sábana superior algodón para cama king size.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Sábana superior king' },
		{ id: 'cortina-salon-turquesa', nombre: 'Cortina sala turquesa', tipo: 'Decoración', descripcion: 'Cortina elegante en tonos turquesa para tu sala.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Cortina sala turquesa' },
		{ id: 'cortina-salon-rosa', nombre: 'Cortina sala rosa', tipo: 'Decoración', descripcion: 'Cortina decorativa en tonos rosa para ambientes acogedores.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Cortina sala rosa' },
		{ id: 'cortina-salon-gris', nombre: 'Cortina sala gris', tipo: 'Decoración', descripcion: 'Cortina neutra en gris que combina con cualquier estilo.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Cortina sala gris' },
		{ id: 'cortina-dormitorio-tonos-pastel', nombre: 'Cortina dormitorio tonos pastel', tipo: 'Decoración', descripcion: 'Cortina suave en tonos pastel para dormitorio relajante.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Cortina dormitorio pastel' },
		{ id: 'cortina-blackout-oscurecedora', nombre: 'Cortina blackout oscurecedora', tipo: 'Decoración', descripcion: 'Cortina opaca que bloquea la luz solar completamente.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Cortina blackout' },
		{ id: 'mantel-mesa-6-personas', nombre: 'Mantel mesa 6 personas', tipo: 'Decoración', descripcion: 'Mantel elegante para mesas de 6 personas.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Mantel 6 personas' },
		{ id: 'mantel-mesa-8-personas', nombre: 'Mantel mesa 8 personas', tipo: 'Decoración', descripcion: 'Mantel de lujo para mesas de 8 comensales.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Mantel 8 personas' },
		{ id: 'mantel-mesa-10-personas', nombre: 'Mantel mesa 10 personas', tipo: 'Decoración', descripcion: 'Mantel extra grande para mesas de 10 personas.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Mantel 10 personas' },
		{ id: 'servilletas-algodon-set-12', nombre: 'Servilletas algodón set 12', tipo: 'Decoración', descripcion: 'Set de 12 servilletas de algodón de calidad premium.', imagen: 'imagenes/productos/toallones-colores.jpg', imagenAlt: 'Servilletas algodón' },
		{ id: 'servilletas-lino-set-6', nombre: 'Servilletas lino set 6', tipo: 'Decoración', descripcion: 'Servilletas de lino elegante para mesas especiales.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Servilletas lino' },
		{ id: 'camino-mesa-lino', nombre: 'Camino de mesa lino', tipo: 'Decoración', descripcion: 'Camino de lino para decorar y proteger tu mesa.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Camino mesa lino' },
		{ id: 'tapete-entrada-alfombra', nombre: 'Tapete entrada alfombra', tipo: 'Alfombras', descripcion: 'Tapete decorativo para puerta de entrada con soporte antideslizante.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Tapete entrada' },
		{ id: 'tapete-bano-antideslizante', nombre: 'Tapete baño antideslizante', tipo: 'Alfombras', descripcion: 'Tapete seguro para baño con base antideslizante.', imagen: 'imagenes/productos/toallones-colores.jpg', imagenAlt: 'Tapete baño' },
		{ id: 'tapete-bano-memoria-forma', nombre: 'Tapete baño memoria de forma', tipo: 'Alfombras', descripcion: 'Tapete baño confortable con memoria de forma.', imagen: 'imagenes/productos/frazadas-apiladas.jpg', imagenAlt: 'Tapete memoria forma' },
		{ id: 'cojin-decorativo-rosa', nombre: 'Cojín decorativo rosa', tipo: 'Accesorios', descripcion: 'Almohada decorativa rosa para sofá y cama.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Cojín rosa' },
		{ id: 'cojin-decorativo-turquesa', nombre: 'Cojín decorativo turquesa', tipo: 'Accesorios', descripcion: 'Cojín turquesa que añade color y estilo a tu hogar.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Cojín turquesa' },
		{ id: 'cojin-decorativo-gris', nombre: 'Cojín decorativo gris', tipo: 'Accesorios', descripcion: 'Cojín versátil en gris que combina con todo.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Cojín gris' },
		{ id: 'cojin-decorativo-pastel', nombre: 'Cojín decorativo tonos pastel', tipo: 'Accesorios', descripcion: 'Cojín en tonos pastel para ambientes suaves y relajantes.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Cojín pastel' },
		{ id: 'cojin-terciopelo-pack-2', nombre: 'Cojín terciopelo pack 2', tipo: 'Accesorios', descripcion: 'Pack de 2 cojines en terciopelo de máxima suavidad.', imagen: 'imagenes/productos/acolchado-multicolor.jpg', imagenAlt: 'Cojín terciopelo pack 2' },
		{ id: 'cojin-terciopelo-pack-4', nombre: 'Cojín terciopelo pack 4', tipo: 'Accesorios', descripcion: 'Pack de 4 cojines terciopelo para decoración completa.', imagen: 'imagenes/productos/acolchado-tonos-calidos.jpg', imagenAlt: 'Cojín terciopelo pack 4' },
		{ id: 'funda-almohada-decorativa', nombre: 'Funda almohada decorativa', tipo: 'Accesorios', descripcion: 'Funda removible para almohadas decorativas.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Funda almohada' },
		{ id: 'funda-cojin-removible', nombre: 'Funda cojín removible', tipo: 'Accesorios', descripcion: 'Funda de cojín removible y lavable para fácil mantenimiento.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Funda cojín removible' },
		{ id: 'puff-reposapiés-turquesa', nombre: 'Puff reposapiés turquesa', tipo: 'Decoración', descripcion: 'Puff multifuncional en turquesa como reposapiés y asiento.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Puff turquesa' },
		{ id: 'puff-reposapiés-rosa', nombre: 'Puff reposapiés rosa', tipo: 'Decoración', descripcion: 'Puff decorativo en tonos rosa para sala y dormitorio.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Puff rosa' },
		{ id: 'puff-reposapiés-gris', nombre: 'Puff reposapiés gris', tipo: 'Decoración', descripcion: 'Puff versátil en gris con excelente funcionalidad.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Puff gris' },
		{ id: 'puff-storage-organizador', nombre: 'Puff storage organizador', tipo: 'Decoración', descripcion: 'Puff con almacenaje interno para guardar mantas y almohadas.', imagen: 'imagenes/productos/frazadas-apiladas.jpg', imagenAlt: 'Puff storage' },
		{ id: 'banco-tapizado-dormitorio', nombre: 'Banco tapizado dormitorio', tipo: 'Decoración', descripcion: 'Banco elegante tapizado para pie de cama.', imagen: 'imagenes/productos/acolchado-tonos-calidos.jpg', imagenAlt: 'Banco tapizado' },
		{ id: 'cortina-sheer-translucida', nombre: 'Cortina sheer translúcida', tipo: 'Decoración', descripcion: 'Cortina translúcida que deja pasar la luz suavemente.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Cortina sheer' },
		{ id: 'cortina-lino-natural', nombre: 'Cortina lino natural', tipo: 'Decoración', descripcion: 'Cortina de lino natural con texturas elegantes.', imagen: 'imagenes/productos/textiles-cama-tonos-pastel.jpg', imagenAlt: 'Cortina lino natural' },
		{ id: 'cortina-motorizada-smart', nombre: 'Cortina motorizada smart', tipo: 'Decoración', descripcion: 'Cortina inteligente con motor y control remoto.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Cortina motorizada' },
		{ id: 'panel-divisor-tela', nombre: 'Panel divisor tela', tipo: 'Decoración', descripcion: 'Panel divisor decorativo de tela para ambientes.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Panel divisor' },
		{ id: 'cortina-thermal-aislante', nombre: 'Cortina térmica aislante', tipo: 'Decoración', descripcion: 'Cortina térmica que aísla del frío y calor exterior.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Cortina térmica' },
		{ id: 'toalla-bano-premium-turquesa', nombre: 'Toalla baño premium turquesa', tipo: 'Toallas', descripcion: 'Toalla baño de lujo en turquesa con máxima absorbencia.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Toalla turquesa premium' },
		{ id: 'toalla-bano-premium-rosa', nombre: 'Toalla baño premium rosa', tipo: 'Toallas', descripcion: 'Toalla baño elegante en rosa de calidad premium.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Toalla rosa premium' },
		{ id: 'toalla-bano-premium-gris', nombre: 'Toalla baño premium gris', tipo: 'Toallas', descripcion: 'Toalla baño versátil en gris de máxima suavidad.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Toalla gris premium' },
		{ id: 'toalla-mano-turquesa', nombre: 'Toalla mano turquesa', tipo: 'Toallas', descripcion: 'Toalla de mano en turquesa para baño diario.', imagen: 'imagenes/productos/ropa-de-cama-turquesa.jpg', imagenAlt: 'Toalla mano turquesa' },
		{ id: 'toalla-mano-rosa', nombre: 'Toalla mano rosa', tipo: 'Toallas', descripcion: 'Toalla mano color rosa suave y absorbente.', imagen: 'imagenes/productos/ropa-de-cama-rosa.jpg', imagenAlt: 'Toalla mano rosa' },
		{ id: 'toalla-mano-gris', nombre: 'Toalla mano gris', tipo: 'Toallas', descripcion: 'Toalla de mano gris práctica y versátil.', imagen: 'imagenes/productos/ropa-de-cama-gris.jpg', imagenAlt: 'Toalla mano gris' },
		{ id: 'toalla-visitas-set-6', nombre: 'Toalla visitas set 6', tipo: 'Toallas', descripcion: 'Set de 6 toallitas para visitas o hóspedes.', imagen: 'imagenes/productos/toallones-colores.jpg', imagenAlt: 'Toalla visitas set' },
		{ id: 'toalla-playa-grande', nombre: 'Toalla playa grande', tipo: 'Toallas', descripcion: 'Toalla de playa grande con diseño fresco y colorido.', imagen: 'imagenes/productos/alfombras-colores.jpg', imagenAlt: 'Toalla playa grande' },
		{ id: 'toalla-playa-jumbo', nombre: 'Toalla playa jumbo XXL', tipo: 'Toallas', descripcion: 'Toalla playa extra grande tipo jumbo para máxima cobertura.', imagen: 'imagenes/productos/frazadas-apiladas.jpg', imagenAlt: 'Toalla playa jumbo' },
		{ id: 'toalla-microfibra-secado-rapido', nombre: 'Toalla microfibra secado rápido', tipo: 'Toallas', descripcion: 'Toalla de microfibra que seca en minutos, ideal para gym.', imagen: 'imagenes/productos/toallones-colores.jpg', imagenAlt: 'Toalla microfibra' }
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
				return `<article class="product"><div class="media">${imagen}${video}</div><div class="product-info"><span class="category">${escapar(producto.tipo)}</span><h3>${escapar(producto.nombre)}</h3><p class="description">${escapar(producto.descripcion)}</p><div class="product-footer"><span class="price">${escapar(precio)}</span><button type="button" class="button" data-agregar="${producto.id}" aria-label="Agregar ${escapar(producto.nombre)} a la canasta">Agregar</button></div></div></article>`;
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
				return `<div class="cart-item"><div><strong>${escapar(producto.nombre)}</strong><p>${precio}</p></div><div class="quantity"><button type="button" data-cambiar="menos" data-id="${id}" aria-label="Disminuir cantidad de ${escapar(producto.nombre)}">−</button><span>${cantidad}</span><button type="button" data-cambiar="mas" data-id="${id}" aria-label="Aumentar cantidad de ${escapar(producto.nombre)}">+</button></div></div>`;
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
