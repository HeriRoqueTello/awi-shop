<script setup lang="ts">
import {
  TheDropDownNavbar,
  TheDropDownMenu,
  TheDropDownItem,
  TheDropDownDivideBlock,
} from "vue3-dropdown-navbar";
import { ref } from "vue";

const dropdownMenu = ref<InstanceType<typeof TheDropDownMenu>>();
</script>

<template>
  <TheDropDownNavbar>
    <template #logo>
      <TheDropDownNavbarLogo>ÑawiShop</TheDropDownNavbarLogo>
    </template>
    <TheDropDownItem link="/">Home</TheDropDownItem>
    <TheDropDownMenu text="Mujer" ref="dropdownMenu">
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mujer/vestidos">Vestidos</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mujer/bluzas">Bluzas</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mujer/polos">Polos</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mujer/pantalones">pantalones</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mujer/faldas">faldas</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mujer/abrigos">abrigos</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mujer/lenceria">lenceria</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mujer/zapatos">zapatos</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mujer/zapatillas">zapatillas</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem class="capitalize" :native="true" link="/categoria/mujer">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
    <TheDropDownMenu text="Varones" ref="dropdownMenu">
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/varones/camisas">camisas</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/varones/pantalones">pantalones</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/varones/abrigos">abrigos</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/varones/zapatillas">zapatillas</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/varones/zapatos">zapatos</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem class="capitalize" link="/categoria/varones" :native="true">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
    <TheDropDownMenu text="Niños" ref="dropdownMenu">
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/ninos/bluzas">bluzas</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/ninos/camisas">camisas</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/ninos/pantalones">pantalones</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/ninos/abrigos">abrigos</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/ninos/zapatos">zapatos</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/ninos/zapatillas">zapatillas</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/ninos/juguetes">juguetes</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem class="capitalize" link="/categoria/ninos" :native="true">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
    <TheDropDownMenu text="Mascota" ref="dropdownMenu">
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mascota/accesorios">accesorios</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mascota/ropa">ropa</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mascota/zapatos">zapatos</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/mascota/juguetes">juguetes</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem class="capitalize" :native="true" link="/categoria/mascota">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
    <TheDropDownMenu text="Joyas y accesorios" ref="dropdownMenu">
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/joyas-y-accesorios/fantasia">fantasia</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/joyas-y-accesorios/oro">oro</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/joyas-y-accesorios/plata">plata</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/joyas-y-accesorios/acero">acero</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem class="capitalize" :native="true" link="/categoria/joyas-y-accesorios">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
    <TheDropDownMenu text="Adornos" ref="dropdownMenu">
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/adornos/terraza">terraza</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/adornos/jardineria">jardineria</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/adornos/sala">sala</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/adornos/cocina">cocina</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/adornos/dormitorio">dormitorio</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem class="capitalize" :native="true" link="/categoria/adornos">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
    <TheDropDownMenu text="Salud y belleza" ref="dropdownMenu">
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/salud-y-belleza/cosmeticos">cosmeticos</TheDropDownItem>
      <TheDropDownItem class="capitalize" :native="true" link="/subcategoria/salud-y-belleza/skincare">skincare</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem class="capitalize" :native="true" link="/categoria/salud-y-belleza">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
  </TheDropDownNavbar>
</template>