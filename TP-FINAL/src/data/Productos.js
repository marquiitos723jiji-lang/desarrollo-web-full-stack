import { imagenProducts } from "./imagenProducts"

const productos = [{
    id: 1,
    nombre: "Perfume para Ropa",
    precio: 3000 ,
    descripcion: "El perfume para ropa (o texturizador aromático) es un aromatizante líquido diseñado exclusivamente para aplicar sobre prendas, sábanas, cortinas y sillones. Su fórmula de secado rápido fija fragancias de larga duración en las fibras textiles sin manchar ni dañar los tejidos, proporcionando una sensación de frescura limpia y continua.",
    imagen: imagenProducts.PerfumeparaRopa
}, {
    id: 2,
    nombre: "Jabon en Polvo para lavar Ropa",
    precio: 3500 ,
    descripcion: "Este producto es Granby Bicarbonato Matic, un jabón en polvo para lavar la ropa diseñado para su uso en lavarropas automáticos, potenciado con bicarbonato para una limpieza profunda.",
    imagen: imagenProducts.JabonenPolvoparalavarRopa
}, {
    id: 3,
    nombre: "Jabon Liquido",
    precio: 4000 ,
    descripcion: "Este producto es Ala Eco Lavado a Mano, un jabón líquido concentrado diseñado específicamente para el lavado de ropa de forma manual, optimizado para cuidar el agua y las fibras textiles.",
    imagen: imagenProducts.JabonLiquido
}, {
    id: 4,
    nombre: "Suavisante de ropa  liquido",
    precio: 2700 ,
    descripcion: "Este producto es Snuggle Blue Sparkle (Cuddle-Up Fresh), un suavizante de ropa líquido ultra concentrado diseñado para brindar suavidad extrema y frescura duradera a tus prendas.",
    imagen: imagenProducts.Suavisantederopaliquido
}, {
    id: 5,
    nombre: "Quitamanchas Ropa liquido color",
    precio: 6000 ,
    descripcion: "Este producto es Vanish Quitamanchas Líquido Ropa Color, un aditivo de lavado en formato líquido diseñado para eliminar manchas difíciles en prendas de color sin dañar las fibras ni desteñir los tejidos.",
    imagen: imagenProducts.QuitamanchasRopaliquidocolor
}, {
    id: 6,
    nombre: "Full Fresh Blanqueador sin Cloro",
    precio: 5500 ,
    descripcion: "Este producto es Full Fresh Blanqueador sin Cloro, un aditivo de lavado multiusos formulado a base de oxígeno activo para desmanchar, blanquear y desodorizar prendas y superficies de forma segura.",
    imagen: imagenProducts.FullFreshBlanqueadorsinCloro
}, {
    id: 7,
    nombre: "Jabón en Barra Héroe Remueve Manchas Difíciles",
    precio: 1500 ,
    descripcion: "Este producto es el Jabón en Barra Héroe Remueve Manchas Difíciles, un jabón de lavar puro con glicerina formulado especialmente para el lavado a mano y el pretratamiento de prendas.",
    imagen: imagenProducts.JabónenBarraHéroeRemueveManchasDifíciles
}, {
    id: 8,
    nombre: "Faultless Acabado Firme",
    precio:  1700,
    descripcion: "Este producto es Faultless Acabado Firme, un almidón en aerosol para ropa diseñado para facilitar el planchado y dejar las prendas con un aspecto impecable, profesional y con cuerpo.",
    imagen: imagenProducts.FaultlessAcabadoFirme
}, {
    id: 9,
    nombre: "Bolas para Secadora",
    precio: 2000 ,
    descripcion: "Este producto son Bolas para Secadora (Dryer Balls), unos accesorios reutilizables fabricados en PVC o goma con puntas suaves, diseñados para introducirse en la secadora de ropa junto con las prendas húmedas.",
    imagen: imagenProducts.BolasparaSecadora
}, {
    id: 10,
    nombre: "Ala Camellito Ropa Fina",
    precio: 3200 ,
    descripcion: "Este producto es Ala Camellito Ropa Fina, un jabón líquido concentrado con pH neutro formulado especialmente para el lavado y cuidado de prendas delicadas.",
    imagen: imagenProducts.AlaCamellitoRopaFina
}, {
    id: 11,
    nombre: "Cif Bioactive X5 Poder Desengrasante",
    precio: 1950 ,
    descripcion: "Este producto es Cif Bioactive X5 Poder Desengrasante, un detergente sintético líquido concentrado para platos con fragancia a lima, diseñado para eliminar la grasa rebelde de la vajilla de forma rápida y eficiente.",
    imagen: imagenProducts.CifBioactiveX5PoderDesengrasante
}, {
    id: 12,
    nombre: "Ayudín Agua Lavandina Común Original",
    precio: 4500 ,
    descripcion: "Este producto es Ayudín Agua Lavandina Común Original, el desinfectante y blanqueador líquido tradicional más utilizado para asegurar la máxima higiene en el hogar y en la ropa.",
    imagen: imagenProducts.AyudínAguaLavandinaComúnOriginal
}, {
    id: 13,
    nombre: "Cif Expert Antigrasa X3 Poder Desengrasante",
    precio:  2600,
    descripcion: "Este producto es Cif Expert Antigrasa X3 Poder Desengrasante, un limpiador líquido con gatillo pulverizador diseñado específicamente para eliminar la grasa pesada y la suciedad incrustada en las superficies de la cocina.",
    imagen: imagenProducts.CifExpertAntigrasaX3PoderDesengrasante
}, {
    id: 14,
    nombre: "Brasso Crema Brilla Metal",
    precio: 4000 ,
    descripcion: "Este producto es Brasso Crema Brilla Metal, un pulidor y limpiador especializado en formato de pasta/crema diseñado para devolver el brillo original y proteger una amplia variedad de superficies metálicas.",
    imagen: imagenProducts.BrassoCremaBrillaMetal
}, {
    id: 15,
    nombre: "Rex Limpiador de Acero Inoxidable",
    precio: 2800 ,
    descripcion: "Este producto es Rex Limpiador de Acero Inoxidable, un producto especializado desarrollado por Wassington para abrillantar, limpiar y proteger superficies metálicas en un solo paso.",
    imagen: imagenProducts.RexLimpiadordeAceroInoxidable
}, {
    id: 16,
    nombre: "Finish Sal Especial",
    precio: 5000 ,
    descripcion: "Este producto es Finish Sal Especial, un aditivo granulado de alta pureza diseñado específicamente para proteger los lavavajillas contra la acumulación de sarro y optimizar el lavado en zonas de agua dura.",
    imagen: imagenProducts.FinishSalEspecial
}, {
    id: 17,
    nombre: "Finish Abrillantador Powerball",
    precio: 7000 ,
    descripcion: "Este producto es Finish Abrillantador Powerball, un enjuague líquido para máquinas lavavajillas diseñado para acelerar el secado de la vajilla y garantizar un brillo reluciente sin marcas.",
    imagen: imagenProducts.FinishAbrillantadorPowerball
}, {
    id: 18,
    nombre: "Brill Matic Todo en Uno",
    precio: 5000,
    descripcion: "Este producto es Brill Matic Todo en Uno, un detergente en tabletas predosificadas diseñado específicamente para la limpieza eficiente de la vajilla en máquinas lavavajillas automáticas.",
    imagen: imagenProducts.BrillMaticTodoenUno
}, {
    id: 19,
    nombre: "Merclin Limpia Hornos y Parrillas Max Gel",
    precio: 4300 ,
    descripcion: "Este producto es Merclin Limpia Hornos y Parrillas Max Gel, un poderoso limpiador desengrasante diseñado específicamente para eliminar la suciedad más pesada y quemada de superficies de cocción.",
    imagen: imagenProducts.MerclinLimpiaHornosyParrillasMaxGel
}, {
    id: 20,
    nombre: "Jue-Fish Heavy Oil Cleaning Effervescent Tablets",
    precio: 3900 ,
    descripcion: "Este producto son las Jue-Fish Heavy Oil Cleaning Effervescent Tablets, unas pastillas efervescentes concentradas diseñadas específicamente para disolver la grasa pesada y el aceite acumulado en los artefactos de la cocina.",
    imagen: imagenProducts.JueFishHeavyOilCleaningEffervescent0Tablets
}, {
    id: 21,
    nombre: "Tenn by Caselli L-13 Limpiador",
    precio:  4400,
    descripcion: "Este producto es Tenn by Caselli L-13 Limpiador, un limpiador de pisos concentrado con bioalcohol y pH neutro, diseñado especialmente para el cuidado de superficies abrillantadas y delicadas.",
    imagen: imagenProducts.TennbyCaselliL13Limpiador
}, {
    id: 22,
    nombre: "Blem Embellece Cera Líquida para Cerámicos (Incoloro)",
    precio: 5200 ,
    descripcion: "Este producto es Blem Embellece Cera Líquida para Cerámicos (Incoloro), un tratamiento protector diseñado específicamente para dar brillo y cuidar pisos cerámicos sin alterar su tono original.",
    imagen: imagenProducts.BlemEmbelleceCeraLíquidaparaCerámicos
}, {
    id: 23,
    nombre: "Suiza Cera en Pasta para Madera (Roble Claro)",
    precio: 3800 ,
    descripcion: "Este producto es Suiza Cera en Pasta para Madera (Roble Claro), un tratamiento tradicional de alta calidad diseñado para nutrir, proteger y abrillantar superficies de madera en interiores.",
    imagen: imagenProducts.SuizaCeraenPastaparaMadera
}, {
    id: 24,
    nombre: "Todo Limpio Curador de Pisos Rojos",
    precio: 5600 ,
    descripcion: "Este producto es Todo Limpio Curador de Pisos Rojos, un tratamiento líquido impermeabilizante y protector diseñado específicamente para sellar y realzar superficies porosas de color rojo.",
    imagen: imagenProducts.TodoLimpioCuradordePisosRojos
}, {
    id: 25,
    nombre: "Suiza Removedor de Ceras y Autobrillos",
    precio: 4900 ,
    descripcion: "Este producto es Suiza Removedor de Ceras y Autobrillos, un potente limpiador profundo formulado específicamente para eliminar capas acumuladas de cera vieja, autobrillos y suciedad rebelde en pisos fríos",
    imagen: imagenProducts.SuizaRemovedordeCerasyAutobrillos
}, {
    id: 26,
    nombre: "Más Brillo Limpiador Multisuperficies Concentrado",
    precio: 5500 ,
    descripcion: "Este producto es Más Brillo Limpiador Multisuperficies Concentrado, un limpiador líquido multiuso diseñado para remover la suciedad diaria y aportar un acabado reluciente a diversas áreas del hogar.",
    imagen: imagenProducts.MásBrilloLimpiadorMultisuperficiesConcentrado
}, {
    id: 27,
    nombre: "Bialcohol Alcohol en Gel Neutro (de Porta)",
    precio: 4000 ,
    descripcion: "Este producto es Bialcohol Alcohol en Gel Neutro (de Porta), un gel antibacterial desarrollado para la desinfección inmediata y profunda de las manos sin necesidad de usar agua ni toallas.",
    imagen: imagenProducts.BialcoholAlcoholenGelNeutro
}, {
    id: 28,
    nombre: "Bialcohol Alcohol Etílico 96% (de Porta)",
    precio: 3500 ,
    descripcion: "Este producto es Bialcohol Alcohol Etílico 96% (de Porta), un antiséptico y desinfectante líquido de calidad hospitalaria, formulado bajo los estándares de la Farmacopea Argentina para garantizar una máxima pureza y eficacia.",
    imagen: imagenProducts.BialcoholAlcoholEtílico96 
}, {
    id: 29,
    nombre: "Cif Aerosol Desinfectante de Ambientes y Superficies Bioactive Original",
    precio: 3600 ,
    descripcion: "Este producto es Cif Aerosol Desinfectante de Ambientes y Superficies Bioactive Original, un potente desinfectante en spray diseñado para eliminar gérmenes del hogar y dejar una fragancia fresca y limpia.",
    imagen: imagenProducts.CifAerosolDesinfectantedeAmbientesySuperficiesBioactiveOriginal
}, {
    id: 30,
    nombre: "Cif Gel Limpiador Desinfectante de Superficies Bioactive",
    precio: 3400 ,
    descripcion: "Este producto es Cif Gel Limpiador Desinfectante de Superficies Bioactive, un limpiador desinfectante concentrado en formato gel diseñado para ofrecer una higiene profunda y eliminar gérmenes en múltiples superficies del hogar.",
    imagen: imagenProducts.CifGelLimpiadorDesinfectantedeSuperficiesBioactive
}, {
    id: 31,
    nombre: "Saltes Avanza Ácido Muriático 19%",
    precio: 3500 ,
    descripcion: "Este producto es Saltes Avanza Ácido Muriático 19%, un potente limpiador químico e industrial de base ácida (ácido clorhídrico) diseñado para la limpieza profunda de superficies duras, remoción de sarro extremo y decapado de materiales de construcción.",
    imagen: imagenProducts.SaltesAvanzaÁcidoMuriático19
}, {
    id: 32,
    nombre: "Mundiclean Anti Sarro",
    precio: 2900 ,
    descripcion: "Este producto es Mundiclean Anti Sarro, un limpiador desincrustante líquido de base ácida diseñado específicamente para eliminar de forma rápida los depósitos de cal, sarro y manchas minerales rebeldes en las superficies del baño y la cocina.",
    imagen: imagenProducts.MundicleanAntiSarro
}, {
    id: 33,
    nombre: "Pato Purific 100% Destructor de Sarro Marina",
    precio: 5900 ,
    descripcion: "Este producto es Pato Purific 100% Destructor de Sarro Marina, un limpiador desinfectante líquido de base ácida diseñado específicamente para la limpieza profunda, eliminación de sarro extremo y desinfección del interior del inodoro.",
    imagen: imagenProducts.PatoPurific100DestructordeSarroMarina
}, {
    id: 34,
    nombre: "Pato Purific Pastilla Para Mochila",
    precio: 5200 ,
    descripcion: "Este producto es Pato Purific Pastilla Para Mochila, un limpiador continuo para inodoros en formato de tabletas sólidas, diseñado para colocarse dentro del depósito de agua (mochila) para mantener la taza limpia y fresca con cada descarga.",
    imagen: imagenProducts.PatoPurificPastillParaMochila
}, {
    id: 35,
    nombre: "Viyilant Destapa Cañerías Súper Concentrado",
    precio: 3900 ,
    descripcion: "Este producto es Viyilant Destapa Cañerías Súper Concentrado, un potente limpiador químico de acción directa diseñado para disolver obstrucciones severas y mantener el correcto flujo de agua en los desagües del hogar.",
    imagen: imagenProducts.ViyilantDestapaCañeríasSúperConcentrado
}, {
    id: 36,
    nombre: "Merclin Blanqueador de Juntas (El Pintajuntas)",
    precio: 3900 ,
    descripcion: "Este producto es Merclin Blanqueador de Juntas (El Pintajuntas), un renovador líquido y estético formulado específicamente para blanquear, cubrir imperfecciones y proteger las uniones entre revestimientos cerámicos en cocinas, baños y lavaderos.",
    imagen: imagenProducts.MerclinBlanqueadordeJuntas
}, {
    id: 37,
    nombre: "Ayudín Antihongos Removedor Activo",
    precio: 4100 ,
    descripcion: "Este producto es Ayudín Antihongos Removedor Activo, un limpiador desinfectante líquido con cloro activo en formato de gatillo pulverizador, diseñado específicamente para eliminar moho, hongos y bacterias de raíz en las zonas más húmedas del hogar.",
    imagen: imagenProducts.AyudínAntihongosRemovedorActivo
}, {
    id: 38,
    nombre: "Poett Desodorante de Ambientes Flores de Primavera",
    precio: 4300 ,
    descripcion: "Este producto es Poett Desodorante de Ambientes Flores de Primavera, un aromatizante en aerosol diseñado para transformar los espacios del hogar liberando una fragancia floral intensa y de larga duración de forma inmediata.",
    imagen: imagenProducts.PoettDesodorantedeAmbientesFloresdePrimavera
}, {
    id: 39,
    nombre: "Rexona Jabón Líquido para Manos Antibacterial Fresh",
    precio: 3400 ,
    descripcion: "Este producto es Rexona Jabón Líquido para Manos Antibacterial Fresh, un limpiador dermo-cosmético diseñado para proporcionar una higiene profunda en las manos, eliminando gérmenes de forma eficaz mientras cuida la hidratación de la piel.",
    imagen: imagenProducts.RexonaJabónLíquidoparaManosAntibacterialFresh
}, {
    id: 40,
    nombre: "Secador de Vidrios y Mamparas Manual",
    precio: 2000 ,
    descripcion: "Este producto es un Secador de Vidrios y Mamparas Manual (también conocido como limpiavidrios o rasqueta de mano), un accesorio de limpieza compacto diseñado para escurrir el agua de forma rápida y sin dejar marcas en superficies lisas.",
    imagen: imagenProducts.SecadordeVidriosyMamparasManual
}, {
    id: 41,
    nombre: "Shiny Lustramuebles en Aerosol (by Saphirus)",
    precio: 2900 ,
    descripcion: "Este producto es Shiny Lustramuebles en Aerosol (by Saphirus), un renovador y protector multisuperficies en spray diseñado para aportar brillo instantáneo, suavidad y protección contra el polvo en diversos mobiliarios del hogar.",
    imagen: imagenProducts.ShinyLustramueblesenAerosol
}, {
    id: 42,
    nombre: "Würth Silicona en Spray",
    precio: 6000 ,
    descripcion: "Este producto es Würth Silicona en Spray, un protector, lubricante y renovador de calidad profesional diseñado especialmente para el cuidado y mantenimiento de piezas plásticas, gomas y metales, principalmente en el rubro automotriz e industrial.",
    imagen: imagenProducts.WürthSiliconaenSpray
}, {
    id: 43,
    nombre: "Paño de Microfibra",
    precio: 1500 ,
    descripcion: "Este producto es un Paño de Microfibra, un accesorio textil de limpieza de alta tecnología fabricado con una mezcla de poliéster y poliamida, diseñado para atrapar la suciedad y absorber líquidos de forma ultra eficiente sin rayar las superficies.",
    imagen: imagenProducts.PañodeMicrofibra
}, {
    id: 44,
    nombre: "Esponja Multiuso Asapractic (La Gauchita)",
    precio: 900 ,
    descripcion: "Este producto es la Esponja Multiuso Asapractic (La Gauchita), un accesorio clásico de limpieza de doble acción diseñado para el lavado eficiente de vajilla y la limpieza de diversas superficies en el hogar.",
    imagen: imagenProducts.EsponjaMultiusoAsapractic
}, {
    id: 45,
    nombre: "Rollitos de Lana de Acero Virulana",
    precio: 1100 ,
    descripcion: "Este producto son los Rollitos de Lana de Acero Virulana, un clásico accesorio de limpieza abrasivo y pulidor diseñado para remover la suciedad más extrema y devolver el brillo original a superficies metálicas y de cocina.",
    imagen: imagenProducts.RollitosdeLanadeAceroVirulana
}, {
    id: 46,
    nombre: "Escobillón Samantha Italy",
    precio: 2500 ,
    descripcion: "Este producto es el Escobillón Samantha Italy, un cabezal de escoba diseñado para el barrido eficiente de pisos en interiores y exteriores semicubiertos, combinando cerdas de dos densidades para atrapar tanto el polvo fino como la suciedad pesada.",
    imagen: imagenProducts.EscobillónSamanthaItaly
}, {
    id: 47,
    nombre: "Trapo de Piso Gris/Azulado Tradicional",
    precio: 1800 ,
    descripcion: "Este producto es un Trapo de Piso Gris/Azulado Tradicional, un accesorio textil clásico y de alta resistencia diseñado para el lavado, refregado y secado de superficies duras en todo tipo de ambientes.",
    imagen: imagenProducts.TrapodePisoGrisAzuladoTradicional
}, {
    id: 48,
    nombre: "Set de Trapos de Piso Consorcio con Guardas / Líneas de Color",
    precio: 3000 ,
    descripcion: "Este producto es un Set de Trapos de Piso Consorcio con Guardas / Líneas de Color, una variedad de paños textiles de algodón diseñados para el lavado, escurrido y secado eficiente de superficies duras en el hogar o comercios.",
    imagen: imagenProducts.SetdeTraposdePisoConsorcioconGuardasLíneasdeColor
}, {
    id: 49,
    nombre: "Guantes de Látex para Limpieza Doméstica e Industrial",
    precio: 2300 ,
    descripcion: "Este producto son unos Guantes de Látex para Limpieza Doméstica e Industrial, un accesorio de protección personal diseñado para resguardar las manos y los antebrazos del contacto directo con el agua, la suciedad y los productos químicos agresivos.",
    imagen: imagenProducts.GuantesdeLátexparaLimpiezaDomésticaeIndustrial
}]

export default productos