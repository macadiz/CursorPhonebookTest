var Validar = {
    Rut: function (rut) {
        let dv = rut.split("-")[1];
        let rut_base = rut.split("-")[0];
        var calculo = 0;
        var multiplicador = 2;
        for (var i = rut_base.length - 1; i >= 0; i--) {
            if (multiplicador > 7) {
                multiplicador = 2;
            }
            calculo += parseInt(rut_base.charAt(i)) * multiplicador;
            multiplicador++;
        }
        let resto = calculo % 11;
        let calc_dv = 11 - resto;
        if(dv == calc_dv) {
            return true;
        } else if (calc_dv == 11) {
            return dv == 0;
        } else if (calc_dv == 10) {
            return dv.toLowerCase() == "k";
        } else {
            return false;
        }
    },
    Telefono: function (telefono) {
        let strTelefono = telefono.toString();
        return strTelefono.length == 11;
    }
}

export default Validar;