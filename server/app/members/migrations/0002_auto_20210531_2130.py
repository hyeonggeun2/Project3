# Generated by Django 3.2.3 on 2021-05-31 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='name',
            field=models.CharField(default='', max_length=30),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='user',
            name='grade',
            field=models.CharField(choices=[('bronze', 'bronze'), ('silver', 'silver'), ('gold', 'gold'), ('platinum', 'platinum'), ('diamond', 'diamond')], default='bronze', max_length=15, verbose_name='등급'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True, help_text='유저를 활성하려면 체크, 차단하려면 체크를 해제하세요.', verbose_name='활성 / 차단'),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False, help_text='관리자 권한을 주려면 체크하세요.', verbose_name='관리자 권한'),
        ),
    ]
