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
    <TheDropDownMenu text="Ropa" ref="dropdownMenu">
      <TheDropDownItem :native="true" link="/subcategoria/mujeres">Mujeres</TheDropDownItem>
      <TheDropDownItem :native="true" link="/subcategoria/hombres">Hombres</TheDropDownItem>
      <TheDropDownItem :native="true" link="/subcategoria/bebes">Bebes</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem :native="true" link="/categoria/ropa">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
    <TheDropDownMenu text="Electrohogar" ref="dropdownMenu">
      <TheDropDownItem :native="true" link="/subcategoria/cocina">Cocina</TheDropDownItem>
      <TheDropDownItem :native="true" link="/subcategoria/muebles">Muebles</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem link="/categoria/electrohogar" :native="true">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
    <TheDropDownMenu text="Tecnologia" ref="dropdownMenu">
      <TheDropDownItem :native="true" link="/subcategoria/celulares">Celulares</TheDropDownItem>
      <TheDropDownItem :native="true" link="/subcategoria/accesorios">Accesorios</TheDropDownItem>
      <TheDropDownItem :native="true" link="/subcategoria/computadoras">Computadoras</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem link="/categoria/tecnologia" :native="true">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
    <TheDropDownMenu text="Otros" ref="dropdownMenu">
      <TheDropDownItem :native="true" link="/subcategoria/libros">Libros</TheDropDownItem>
      <TheDropDownItem :native="true" link="/subcategoria/mascotas">Mascotas</TheDropDownItem>
      <TheDropDownItem :native="true" link="/subcategoria/supermercado">Supermercado</TheDropDownItem>
      <TheDropDownDivideBlock>
        <TheDropDownItem :native="true" link="/categoria/otros">Ver todo</TheDropDownItem>
      </TheDropDownDivideBlock>
    </TheDropDownMenu>
  </TheDropDownNavbar>
</template>