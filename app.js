/* Mesa Madrid — static demo app. No third-party runtime dependencies. */
'use strict';

const restaurants = [
  { id:'azotea-sol', name:'Azotea del Laurel', cuisine:'Mediterránea', price:3, rating:4.8, reviews:328, distance:0.8, zone:'madrid', area:'Centro · Madrid', place:'Terraza con vistas', lat:40.417, lng:-3.705, image:'food-mediterranean.webp', safe:['gluten','lactosa','frutos secos','huevo'], features:['Terraza','Carta de alérgenos','Opción vegana'], times:['13:00','13:30','14:00','14:30','20:30','21:00','21:30','22:00'], description:'Cocina mediterránea contemporánea, producto de temporada y una terraza serena sobre los tejados del centro.' },
  { id:'nami', name:'Nami Omakase', cuisine:'Japonesa', price:3, rating:4.9, reviews:186, distance:2.1, zone:'madrid', area:'Chamberí · Madrid', place:'Barra de autor', lat:40.431, lng:-3.703, image:'food-japanese.webp', safe:['gluten','lactosa','huevo'], features:['Menú degustación','Barra','Sala tranquila'], times:['13:30','14:00','20:00','20:30','21:00','21:30'], description:'Una barra íntima de inspiración japonesa, con pases cuidados y alternativas adaptables con aviso previo.' },
  { id:'verde-claro', name:'Verde Claro', cuisine:'Plant based', price:2, rating:4.7, reviews:512, distance:2.7, zone:'madrid', area:'Salamanca · Madrid', place:'Cocina vegetal', lat:40.426, lng:-3.680, image:'food-plant.webp', safe:['gluten','lactosa','frutos secos','huevo','marisco','soja'], features:['100% vegetal','Brunch','Dog friendly'], times:['10:00','10:30','11:00','13:30','14:00','20:30','21:00'], description:'Platos vegetales llenos de color, un brunch luminoso y un equipo acostumbrado a conversar sobre ingredientes.' },
  { id:'casa-carmela', name:'Casa Carmela', cuisine:'Española', price:2, rating:4.6, reviews:744, distance:4.4, zone:'madrid', area:'Retiro · Madrid', place:'Tapas y arroces', lat:40.408, lng:-3.675, image:'food-spanish.webp', safe:['gluten','lactosa','frutos secos','marisco'], features:['Arroces','Grupos','Menú infantil'], times:['13:00','13:30','14:00','14:30','15:00','20:30','21:00','21:30'], description:'Recetas españolas para compartir, arroces al centro y sobremesas largas en un espacio cálido y familiar.' },
  { id:'forno-27', name:'Forno 27', cuisine:'Italiana', price:2, rating:4.7, reviews:603, distance:6.8, zone:'madrid', area:'C.C. La Vaguada · Madrid', place:'Centro comercial', lat:40.479, lng:-3.708, image:'food-italian.webp', safe:['gluten','lactosa','frutos secos','huevo'], features:['Masa sin gluten','Familias','Parking'], times:['12:30','13:00','13:30','14:00','20:00','20:30','21:00','21:30','22:00'], description:'Pasta fresca y horno a la vista, con una carta familiar y masas alternativas preparadas bajo solicitud.' },
  { id:'bloom-brunch', name:'Bloom Brunch Club', cuisine:'Brunch', price:1, rating:4.5, reviews:421, distance:9.3, zone:'este', area:'C.C. Plenilunio · Madrid', place:'Centro comercial', lat:40.447, lng:-3.588, image:'food-brunch.webp', safe:['gluten','lactosa','frutos secos','huevo','soja'], features:['Todo el día','Café de especialidad','Parking'], times:['09:30','10:00','10:30','11:00','12:30','13:00','13:30'], description:'Brunch durante todo el día, café de especialidad y opciones dulces y saladas fáciles de personalizar.' },
  { id:'salvia', name:'Salvia Cocina Viva', cuisine:'Mediterránea', price:2, rating:4.8, reviews:279, distance:10.6, zone:'sur', area:'C.C. Islazul · Madrid', place:'Centro comercial', lat:40.363, lng:-3.738, image:'food-mediterranean.webp', safe:['gluten','lactosa','frutos secos','huevo','marisco'], features:['Cocina abierta','Familias','Menú del día'], times:['13:00','13:30','14:00','14:30','20:00','20:30','21:00'], description:'Sabores del Mediterráneo en una carta flexible, pensada para familias y grupos con necesidades distintas.' },
  { id:'kioto-norte', name:'Kioto Norte', cuisine:'Japonesa', price:2, rating:4.6, reviews:355, distance:17.2, zone:'norte', area:'C.C. Plaza Norte 2 · S.S. de los Reyes', place:'Centro comercial', lat:40.541, lng:-3.613, image:'food-japanese.webp', safe:['gluten','lactosa','frutos secos','huevo'], features:['Carta extensa','Parking','Grupos'], times:['13:00','13:30','14:00','14:30','20:30','21:00','21:30','22:00'], description:'Sushi, robata y platos calientes en un comedor amplio, con alternativas señalizadas y servicio ágil.' },
  { id:'olivo-oeste', name:'El Olivo del Oeste', cuisine:'Española', price:2, rating:4.5, reviews:468, distance:19.4, zone:'oeste', area:'C.C. Gran Plaza 2 · Majadahonda', place:'Centro comercial', lat:40.476, lng:-3.871, image:'food-spanish.webp', safe:['gluten','lactosa','frutos secos','huevo','marisco'], features:['Producto local','Terraza','Parking'], times:['13:00','13:30','14:00','14:30','20:00','20:30','21:00','21:30'], description:'Cocina española actual, producto cercano y una agradable terraza para comer sin prisas al oeste de Madrid.' },
  { id:'luna-rossa', name:'Luna Rossa', cuisine:'Italiana', price:2, rating:4.7, reviews:389, distance:20.1, zone:'sur', area:'C.C. ParqueSur · Leganés', place:'Centro comercial', lat:40.339, lng:-3.737, image:'food-italian.webp', safe:['gluten','lactosa','frutos secos','huevo'], features:['Pasta fresca','Menú infantil','Parking'], times:['12:30','13:00','13:30','14:00','20:00','20:30','21:00','21:30','22:00'], description:'Una trattoria desenfadada con pasta hecha a diario, horno de leña y platos para compartir en grupo.' },
  { id:'raiz-h2o', name:'Raíz H2O', cuisine:'Plant based', price:2, rating:4.8, reviews:241, distance:22.7, zone:'este', area:'C.C. H2O · Rivas-Vaciamadrid', place:'Centro comercial', lat:40.351, lng:-3.535, image:'food-plant.webp', safe:['gluten','lactosa','frutos secos','huevo','marisco','soja'], features:['100% vegetal','Sin gluten','Parking'], times:['12:30','13:00','13:30','14:00','20:00','20:30','21:00'], description:'Cocina vegetal creativa con ingredientes de temporada, recetas reconfortantes y fichas de ingredientes claras.' },
  { id:'brasa-x', name:'Brasa X', cuisine:'Parrilla', price:3, rating:4.6, reviews:534, distance:23.8, zone:'sur', area:'X-Madrid · Alcorcón', place:'Centro comercial', lat:40.350, lng:-3.831, image:'food-spanish.webp', safe:['gluten','lactosa','frutos secos','huevo','soja'], features:['Parrilla','Grupos','Parking'], times:['13:00','13:30','14:00','14:30','20:30','21:00','21:30','22:00'], description:'Producto a la brasa, platos generosos y un ambiente urbano para celebraciones y comidas de grupo.' },
  { id:'limon-oasiz', name:'Limón & Sal', cuisine:'Mediterránea', price:2, rating:4.5, reviews:296, distance:25.4, zone:'este', area:'Oasiz · Torrejón de Ardoz', place:'Centro comercial', lat:40.451, lng:-3.481, image:'food-mediterranean.webp', safe:['gluten','lactosa','frutos secos','huevo','marisco'], features:['Terraza','Lago','Parking'], times:['13:00','13:30','14:00','14:30','20:00','20:30','21:00','21:30'], description:'Cocina fresca junto al lago, ensaladas, pescados y brasas suaves en una terraza abierta y luminosa.' },
  { id:'atelier-rozas', name:'Atelier Las Rozas', cuisine:'Fusión', price:3, rating:4.8, reviews:214, distance:26.9, zone:'oeste', area:'Las Rozas Village · Las Rozas', place:'Centro comercial', lat:40.518, lng:-3.902, image:'food-brunch.webp', safe:['gluten','lactosa','frutos secos','huevo','marisco','soja'], features:['Terraza','Cócteles','Parking'], times:['12:00','12:30','13:00','13:30','20:00','20:30','21:00'], description:'Una carta cosmopolita para completar el día de compras, con platos ligeros, cócteles y terraza ajardinada.' },
  { id:'campo-xanadu', name:'Campo & Fuego', cuisine:'Parrilla', price:3, rating:4.7, reviews:617, distance:31.6, zone:'oeste', area:'C.C. Xanadú · Arroyomolinos', place:'Centro comercial', lat:40.300, lng:-3.925, image:'food-spanish.webp', safe:['gluten','lactosa','frutos secos','huevo','soja'], features:['Carnes','Grupos','Parking'], times:['13:00','13:30','14:00','14:30','20:30','21:00','21:30','22:00'], description:'Brasas de encina, verduras de temporada y mesas amplias para reunir a todo el grupo al suroeste de Madrid.' }
];

const allergenLabels = { gluten:'Gluten', lactosa:'Lactosa', 'frutos secos':'Frutos secos', huevo:'Huevo', marisco:'Marisco', soja:'Soja' };
const state = { search:'', prices:new Set(), allergens:new Set(), zone:'all', distance:60, sort:'recommended', selected:null, party:2, currentBooking:null };
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const els = {};
const bounds = { minLat:40.25, maxLat:40.57, minLng:-3.98, maxLng:-3.43 };

function esc(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function readStorage(key, fallback=[]) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function writeStorage(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { showToast('No se pudo guardar en este navegador'); } }
function priceLabel(n) { return '€'.repeat(n); }
function formatDate(dateString) { return new Intl.DateTimeFormat('es-ES',{weekday:'short',day:'numeric',month:'short'}).format(new Date(`${dateString}T12:00:00`)); }
function directionsUrl(r) { return `https://www.google.com/maps/search/?api=1&query=${r.lat},${r.lng}`; }

function init() {
  Object.assign(els, {
    list:$('#restaurantList'), markers:$('#mapMarkers'), count:$('#resultCount'), empty:$('#emptyState'), resultsLayout:$('#resultsLayout'),
    search:$('#listSearch'), heroSearch:$('#heroSearch'), distance:$('#distanceFilter'), distanceValue:$('#distanceValue'), zone:$('#zoneFilter'), sort:$('#sortSelect'),
    backdrop:$('#modalBackdrop'), toast:$('#toast'), filterBody:$('#filterBody'), activeFilterCount:$('#activeFilterCount'), favoriteCount:$('#favoriteCount')
  });
  bindEvents();
  setDateDefaults();
  updateFavoriteCount();
  render();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('service-worker.js').catch(()=>{});
}

function bindEvents() {
  $('#heroSearchForm').addEventListener('submit', e => { e.preventDefault(); state.search=els.heroSearch.value.trim(); els.search.value=state.search; document.querySelector('#explorar').scrollIntoView(); render(); });
  els.search.addEventListener('input', e => { state.search=e.target.value.trim(); els.heroSearch.value=state.search; render(); });
  $$('.quick-links button[data-quick]').forEach(b => b.addEventListener('click', () => { state.search=b.dataset.quick; els.search.value=state.search; els.heroSearch.value=state.search; document.querySelector('#explorar').scrollIntoView(); render(); }));
  $$('.quick-links button[data-allergen]').forEach(b => b.addEventListener('click', () => { state.allergens.add(b.dataset.allergen); syncFilterUI(); document.querySelector('#explorar').scrollIntoView(); render(); }));
  $('#priceFilters').addEventListener('click', e => { const b=e.target.closest('[data-price]'); if(!b)return; toggleSet(state.prices, Number(b.dataset.price)); b.classList.toggle('active'); render(); });
  $('#allergenFilters').addEventListener('click', e => { const b=e.target.closest('[data-allergen]'); if(!b)return; toggleSet(state.allergens, b.dataset.allergen); b.classList.toggle('active'); render(); });
  els.distance.addEventListener('input', e => { state.distance=Number(e.target.value); els.distanceValue.textContent=state.distance; render(); });
  els.zone.addEventListener('change', e => { state.zone=e.target.value; render(); });
  els.sort.addEventListener('change', e => { state.sort=e.target.value; render(); });
  $('#clearFiltersBtn').addEventListener('click', resetFilters);
  $('#emptyResetBtn').addEventListener('click', resetFilters);
  $('#mobileFilterBtn').addEventListener('click', e => { const open=els.filterBody.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded',open); });
  $('#openSearchBtn').addEventListener('click', () => { document.querySelector('#explorar').scrollIntoView(); setTimeout(()=>els.search.focus(),400); });
  $$('.mobile-view-switch button').forEach(b => b.addEventListener('click', () => setMobileView(b.dataset.view)));
  $('#recenterBtn').addEventListener('click', () => { $('#mapArt').style.transform='scale(1)'; state.selected=null; renderMarkers(getFiltered()); });
  els.list.addEventListener('click', onListClick);
  els.markers.addEventListener('click', onMarkerClick);
  $('#favoritesBtn').addEventListener('click', showFavorites);
  $('#bookingsBtn').addEventListener('click', showBookings);
  $('#footerBookingsBtn').addEventListener('click', showBookings);
  $('#shareBtn').addEventListener('click', shareApp);
  $('#footerShareBtn').addEventListener('click', shareApp);
  $('#allergenInfoBtn').addEventListener('click', () => openModal('infoModal'));
  $$('[data-close-modal]').forEach(b => b.addEventListener('click', closeModals));
  els.backdrop.addEventListener('click', closeModals);
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeModals(); });
  $('#partyMinus').addEventListener('click', () => updateParty(-1));
  $('#partyPlus').addEventListener('click', () => updateParty(1));
  $('#reservationForm').addEventListener('submit', submitReservation);
  $('#downloadCalendarBtn').addEventListener('click', downloadCalendar);
  $('#shareBookingBtn').addEventListener('click', shareCurrentBooking);
  $('#savedContent').addEventListener('click', onSavedClick);
  window.addEventListener('popstate', closeModals);
}

function toggleSet(set, value) { set.has(value) ? set.delete(value) : set.add(value); }
function filteredBySearch(r, q) {
  if (!q) return true;
  const haystack = [r.name,r.cuisine,r.area,r.place,...r.features].join(' ').toLocaleLowerCase('es');
  return haystack.includes(q.toLocaleLowerCase('es'));
}
function getFiltered() {
  const list=restaurants.filter(r => filteredBySearch(r,state.search) && (!state.prices.size || state.prices.has(r.price)) && (!state.allergens.size || [...state.allergens].every(a=>r.safe.includes(a))) && (state.zone==='all'||r.zone===state.zone) && r.distance<=state.distance);
  return list.sort((a,b) => state.sort==='distance' ? a.distance-b.distance : state.sort==='rating' ? b.rating-a.rating || b.reviews-a.reviews : state.sort==='price' ? a.price-b.price || b.rating-a.rating : (b.rating*20+Math.log(b.reviews))-(a.rating*20+Math.log(a.reviews)));
}
function render() {
  const list=getFiltered();
  els.count.textContent=list.length;
  $('#heroRestaurantCount').textContent=restaurants.length;
  els.list.innerHTML=list.map(cardTemplate).join('');
  renderMarkers(list);
  els.empty.hidden=list.length!==0;
  els.resultsLayout.hidden=list.length===0;
  const active=state.prices.size+state.allergens.size+(state.zone!=='all'?1:0)+(state.distance<60?1:0)+(state.search?1:0);
  els.activeFilterCount.textContent=active;
}
function cardTemplate(r) {
  const favorites=readStorage('mesaMadridFavorites');
  const active=favorites.includes(r.id);
  const tags=r.safe.slice(0,3).map(a=>`<span class="diet-tag">Opciones sin ${esc(allergenLabels[a]).toLowerCase()}</span>`).join('');
  const more=r.safe.length>3?`<span class="diet-tag more-tag">+${r.safe.length-3}</span>`:'';
  return `<article class="restaurant-card ${state.selected===r.id?'selected':''}" data-id="${r.id}">
    <div class="card-image"><button class="image-button" data-action="detail" aria-label="Ver ${esc(r.name)}"><img src="assets/images/${r.image}" alt="Propuesta gastronómica de ${esc(r.cuisine)}" loading="lazy" width="960" height="640"></button><span class="distance-pill">${r.distance.toFixed(1).replace('.',',')} km desde Sol</span><button class="favorite-button ${active?'active':''}" data-action="favorite" aria-label="${active?'Quitar de':'Añadir a'} favoritos"><svg viewBox="0 0 24 24"><path d="M20.8 4.7a5.4 5.4 0 0 0-7.7 0L12 5.8l-1.1-1.1a5.4 5.4 0 1 0-7.7 7.7L12 21l8.8-8.6a5.4 5.4 0 0 0 0-7.7Z"/></svg></button></div>
    <div class="card-body"><div class="card-kicker"><span>${esc(r.cuisine)} · ${priceLabel(r.price)}</span><span class="rating"><b>★</b> ${r.rating} <small>(${r.reviews})</small></span></div><button class="card-title-button" data-action="detail"><h3>${esc(r.name)}</h3></button><p class="card-location">${esc(r.area)}<br>${esc(r.place)}</p><div class="card-meta">${tags}${more}</div><div class="card-actions"><button class="primary-button" data-action="reserve">Reservar mesa</button><a class="directions-button" href="${directionsUrl(r)}" target="_blank" rel="noopener" aria-label="Cómo llegar a ${esc(r.name)}">↗</a></div></div>
  </article>`;
}
function renderMarkers(list) {
  els.markers.innerHTML=list.map((r,i)=>{ const x=((r.lng-bounds.minLng)/(bounds.maxLng-bounds.minLng))*88+6; const y=(1-(r.lat-bounds.minLat)/(bounds.maxLat-bounds.minLat))*84+8; return `<button class="map-marker ${state.selected===r.id?'active':''}" style="left:${x}%;top:${y}%" data-id="${r.id}" aria-label="${esc(r.name)}"><span>${i+1}</span></button>`; }).join('');
}
function onListClick(e) { const card=e.target.closest('[data-id]'); const action=e.target.closest('[data-action]')?.dataset.action; if(!card||!action)return; const r=restaurants.find(x=>x.id===card.dataset.id); if(action==='favorite') toggleFavorite(r.id); if(action==='detail') openDetail(r); if(action==='reserve') openReservation(r); }
function onMarkerClick(e) { const marker=e.target.closest('[data-id]'); if(!marker)return; state.selected=marker.dataset.id; render(); const card=$(`.restaurant-card[data-id="${state.selected}"]`); if(card && innerWidth>850) card.scrollIntoView({behavior:'smooth',block:'center'}); else if(card) { setMobileView('list'); setTimeout(()=>card.scrollIntoView({behavior:'smooth',block:'center'}),50); } }
function toggleFavorite(id) { const fav=readStorage('mesaMadridFavorites'); const next=fav.includes(id)?fav.filter(x=>x!==id):[...fav,id]; writeStorage('mesaMadridFavorites',next); updateFavoriteCount(); render(); showToast(next.includes(id)?'Añadido a favoritos':'Eliminado de favoritos'); }
function updateFavoriteCount() { const n=readStorage('mesaMadridFavorites').length; if(els.favoriteCount) els.favoriteCount.textContent=n; }

function openDetail(r) {
  state.selected=r.id; renderMarkers(getFiltered());
  $('#detailContent').innerHTML=`<div class="detail-hero"><img src="assets/images/${r.image}" alt="Propuesta gastronómica de ${esc(r.name)}"><div class="detail-hero-copy"><p>${esc(r.cuisine)} · ${priceLabel(r.price)}</p><h2 id="detailTitle">${esc(r.name)}</h2></div></div><div class="detail-body"><p class="detail-summary">${esc(r.description)}</p><div class="detail-facts"><div class="detail-fact"><span>Valoración</span><strong>★ ${r.rating} (${r.reviews})</strong></div><div class="detail-fact"><span>Distancia</span><strong>${r.distance.toFixed(1).replace('.',',')} km</strong></div><div class="detail-fact"><span>Zona</span><strong>${esc(r.area.split('·').pop().trim())}</strong></div><div class="detail-fact"><span>Ambiente</span><strong>${esc(r.features[0])}</strong></div></div><div class="detail-allergens"><h3>Opciones adaptables declaradas</h3><p>${r.safe.map(a=>esc(allergenLabels[a])).join(' · ')}</p><div class="chip-row">${r.safe.map(a=>`<span class="diet-tag">Sin ${esc(allergenLabels[a]).toLowerCase()}</span>`).join('')}</div></div><div class="detail-actions"><button class="primary-button" data-detail-reserve="${r.id}">Solicitar reserva</button><a class="secondary-button" href="${directionsUrl(r)}" target="_blank" rel="noopener">Cómo llegar ↗</a></div></div>`;
  $('[data-detail-reserve]').addEventListener('click',()=>openReservation(r));
  openModal('detailModal');
}
function openReservation(r) {
  closeModals(false); state.party=2; $('#partyValue').textContent='2';
  $('#reservationRestaurantId').value=r.id; $('#reservationRestaurantName').textContent=`${r.name} · ${r.area}`;
  $('#reservationTime').innerHTML='<option value="">Elige una hora</option>'+r.times.map(t=>`<option value="${t}">${t}</option>`).join('');
  const notes=[...state.allergens].map(a=>allergenLabels[a]); $('#guestNotes').value=notes.length?`Necesito opciones sin: ${notes.join(', ')}. Por favor, confirmar protocolo de alérgenos.`:'';
  openModal('reservationModal');
}
function setDateDefaults() { const d=new Date(); d.setDate(d.getDate()+1); const iso=d.toISOString().slice(0,10); $('#reservationDate').min=new Date().toISOString().slice(0,10); $('#reservationDate').value=iso; }
function updateParty(delta) { state.party=Math.min(12,Math.max(1,state.party+delta)); $('#partyValue').textContent=state.party; }
function submitReservation(e) {
  e.preventDefault(); const r=restaurants.find(x=>x.id===$('#reservationRestaurantId').value); const form=e.currentTarget;
  if(!form.reportValidity()||!r)return;
  const code=`MM-${Math.random().toString(36).slice(2,7).toUpperCase()}`;
  const booking={ id:crypto.randomUUID?crypto.randomUUID():Date.now().toString(), code, restaurantId:r.id, restaurant:r.name, area:r.area, date:$('#reservationDate').value, time:$('#reservationTime').value, party:state.party, name:$('#guestName').value.trim(), phone:$('#guestPhone').value.trim(), email:$('#guestEmail').value.trim(), notes:$('#guestNotes').value.trim(), createdAt:new Date().toISOString() };
  writeStorage('mesaMadridBookings',[booking,...readStorage('mesaMadridBookings')]); state.currentBooking=booking;
  closeModals(false); $('#successSummary').textContent=`${r.name}, ${formatDate(booking.date)} a las ${booking.time}, para ${booking.party} ${booking.party===1?'persona':'personas'}.`; $('#successCode').textContent=code; openModal('successModal'); form.reset(); setDateDefaults();
}

function showFavorites() {
  const fav=readStorage('mesaMadridFavorites'); const items=fav.map(id=>restaurants.find(r=>r.id===id)).filter(Boolean);
  $('#savedEyebrow').textContent='Tu selección'; $('#savedTitle').textContent='Restaurantes favoritos';
  $('#savedContent').innerHTML=items.length?`<div class="saved-list">${items.map(r=>`<div class="saved-item" data-saved-id="${r.id}"><img src="assets/images/${r.image}" alt=""><div><h3>${esc(r.name)}</h3><p>${esc(r.cuisine)} · ${priceLabel(r.price)} · ${esc(r.area)}</p></div><button data-saved-action="reserve">Reservar</button></div>`).join('')}</div>`:`<div class="no-saved">Aún no has guardado ningún restaurante.<br>Usa el corazón de cada ficha para crear tu lista.</div>`;
  openModal('savedModal');
}
function showBookings() {
  const bookings=readStorage('mesaMadridBookings'); $('#savedEyebrow').textContent='Tus planes'; $('#savedTitle').textContent='Mis solicitudes de reserva';
  $('#savedContent').innerHTML=bookings.length?`<div class="saved-list">${bookings.map(b=>`<div class="saved-item booking-item" data-booking-id="${esc(b.id)}"><div><h3>${esc(b.restaurant)}</h3><p>${esc(formatDate(b.date))} · ${esc(b.time)} · ${b.party} ${b.party===1?'persona':'personas'}<br><span class="booking-status">● Pendiente de confirmación · ${esc(b.code)}</span></p></div><button class="delete-booking" data-saved-action="delete">Eliminar</button></div>`).join('')}</div>`:`<div class="no-saved">No tienes solicitudes guardadas en este dispositivo.<br>Elige un restaurante y pulsa “Reservar mesa”.</div>`;
  openModal('savedModal');
}
function onSavedClick(e) { const action=e.target.dataset.savedAction; if(action==='reserve'){ const id=e.target.closest('[data-saved-id]').dataset.savedId; openReservation(restaurants.find(r=>r.id===id)); } if(action==='delete'){ const id=e.target.closest('[data-booking-id]').dataset.bookingId; writeStorage('mesaMadridBookings',readStorage('mesaMadridBookings').filter(b=>b.id!==id)); showBookings(); showToast('Solicitud eliminada'); } }

function resetFilters() { state.search=''; state.prices.clear(); state.allergens.clear(); state.zone='all'; state.distance=60; state.sort='recommended'; state.selected=null; els.search.value=''; els.heroSearch.value=''; els.zone.value='all'; els.distance.value=60; els.distanceValue.textContent=60; els.sort.value='recommended'; syncFilterUI(); render(); }
function syncFilterUI() { $$('#priceFilters [data-price]').forEach(b=>b.classList.toggle('active',state.prices.has(Number(b.dataset.price)))); $$('#allergenFilters [data-allergen]').forEach(b=>b.classList.toggle('active',state.allergens.has(b.dataset.allergen))); }
function setMobileView(view) { $$('.mobile-view-switch button').forEach(b=>b.classList.toggle('active',b.dataset.view===view)); els.resultsLayout.classList.toggle('map-view',view==='map'); if(view==='map') setTimeout(()=>$('#mapArt').style.transform='scale(1)',30); }

function openModal(id) { closeModals(false); els.backdrop.hidden=false; const modal=$(`#${id}`); modal.hidden=false; document.body.classList.add('modal-open'); setTimeout(()=>modal.querySelector('button, input, select, textarea, a')?.focus(),20); }
function closeModals(updateBody=true) { $$('.modal').forEach(m=>m.hidden=true); els.backdrop.hidden=true; if(updateBody) document.body.classList.remove('modal-open'); else document.body.classList.remove('modal-open'); }
function showToast(message) { els.toast.textContent=message; els.toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>els.toast.classList.remove('show'),2400); }

async function shareApp() { const data={title:'Mesa Madrid',text:'He encontrado esta app para elegir restaurante en Madrid, filtrar por precio y alergias, y organizar la reserva 🍽️',url:location.href}; if(navigator.share){ try{await navigator.share(data);}catch{} } else { await copyText(`${data.text}\n${data.url}`); showToast('Enlace copiado para compartir'); } }
async function shareCurrentBooking() { const b=state.currentBooking;if(!b)return; const text=`🍽️ Plan en ${b.restaurant}\n📅 ${formatDate(b.date)} a las ${b.time}\n👥 ${b.party} ${b.party===1?'persona':'personas'}\nCódigo local: ${b.code}\n\nPendiente de confirmar con el restaurante.`; const url=`https://wa.me/?text=${encodeURIComponent(text)}`; window.open(url,'_blank','noopener'); }
async function copyText(text){ try{await navigator.clipboard.writeText(text);}catch{ const ta=document.createElement('textarea');ta.value=text;document.body.append(ta);ta.select();document.execCommand('copy');ta.remove(); } }
function downloadCalendar() {
  const b=state.currentBooking;if(!b)return; const r=restaurants.find(x=>x.id===b.restaurantId); const start=new Date(`${b.date}T${b.time}:00`); const end=new Date(start.getTime()+90*60000); const stamp=d=>d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
  const body=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Mesa Madrid//ES','BEGIN:VEVENT',`UID:${b.id}@mesamadrid`,`DTSTAMP:${stamp(new Date())}`,`DTSTART:${stamp(start)}`,`DTEND:${stamp(end)}`,`SUMMARY:Comida en ${b.restaurant}`,`DESCRIPTION:Solicitud ${b.code}. Pendiente de confirmar con el restaurante.${b.notes?' Notas: '+b.notes:''}`,`LOCATION:${r.area}`,'END:VEVENT','END:VCALENDAR'].join('\r\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([body],{type:'text/calendar'}));a.download=`reserva-${b.restaurant.toLowerCase().replace(/[^a-z0-9]+/g,'-')}.ics`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500); showToast('Evento de calendario descargado');
}

document.addEventListener('DOMContentLoaded',init);
